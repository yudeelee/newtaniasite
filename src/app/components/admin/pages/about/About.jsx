import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Uploader from "../../uploader/Uploader";
import { CiEdit } from "react-icons/ci";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Fragment } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [img, setImg] = useState("/img/default.jpg");
  const [value, setValue] = useState("");
  const [changeIdx, setChangeIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  const [workers, setWorkers] = useState([]);

  const [newWorker, setNewWorker] = useState(false);
  const [newWorker1, setNewWorker1] = useState(false);

  const [open, setOpen] = useState([]);

  const [value1, setValue1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/aboutpage");
        setWorkers(res.data.workers);
        const newOpen = new Array(res.data.workers.length).fill(false);
        setOpen(newOpen);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (workers[changeIdx]) {
  //     const newWorkers = JSON.parse(JSON.stringify(workers));
  //     newWorkers[changeIdx].text = value;
  //     setWorkers([...newWorkers]);
  //   }
  // }, [value]);

  const addWorker = async () => {
    try {
      const data = {
        name,
        position,
        photo: img,
        text: value1,
      };
      const res = await axios.post("/api/aboutpage", data);
      setName("");
      setPosition("");
      setImg("/img/default.jpg");
      setValue1("");
    } catch (error) {
      console.log(error);
    }
  };

  const changeOpen = (idx) => {
    const opens = open;
    opens[idx] = !opens[idx];
    setOpen([...open, (open[idx] = !open[idx])]);
  };

  const saveWorkers = async () => {
    try {
      const res = await axios.put("/api/aboutpage", workers);
      // setWorkers(res.data.workers.workers);
    } catch (error) {
      console.log(error);
    }
  };

  const setText = (txt) => {
    const newWorkers = JSON.parse(JSON.stringify(workers));
    newWorkers[changeIdx].text = txt;
    setWorkers([...newWorkers]);
  };

  const upWorker = async (idx) => {
    const newWorkers = JSON.parse(JSON.stringify(workers));
    const x = newWorkers[idx];
    newWorkers[idx] = newWorkers[idx - 1];
    newWorkers[idx - 1] = x;
    try {
      const res = await axios.put("/api/aboutpage", newWorkers);
      setWorkers(res.data.workers.workers);
    } catch (error) {
      console.log(error);
    }
  };

  const downWorker = async (idx) => {
    const newWorkers = JSON.parse(JSON.stringify(workers));
    const x = newWorkers[idx];
    newWorkers[idx] = newWorkers[idx + 1];
    newWorkers[idx + 1] = x;
    try {
      const res = await axios.put("/api/aboutpage", newWorkers);
      setWorkers(res.data.workers.workers);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWorker = async (idx) => {
    let newWorkers = JSON.parse(JSON.stringify(workers));
    newWorkers = newWorkers.filter((wor, i) => i !== idx);
    try {
      const res = await axios.put("/api/aboutpage", newWorkers);
      setWorkers(res.data.workers.workers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.about}>
      <div className={styles.workerList}>
        {workers?.map((wor, idx) => {
          const worHeader = open[idx] ? styles.openHeader : "";
          const rouge = idx % 2 == 0 ? styles.rouge : "";
          const cls = styles.worker + " " + rouge + " " + worHeader;
          return (
            <Fragment key={idx}>
              <div className={cls}>
                <div className={styles.worLeft}>{wor.name}</div>
                <div className={styles.worRight}>
                  <div
                    className={styles.worButton}
                    onClick={() => changeOpen(idx)}
                  >
                    <CiEdit />
                  </div>
                  {idx > 0 ? (
                    <div
                      className={styles.worButton}
                      onClick={() => upWorker(idx)}
                    >
                      <IoMdArrowRoundUp />
                    </div>
                  ) : (
                    <div className={styles.worButtonwhite}></div>
                  )}
                  {idx < workers.length - 1 ? (
                    <div
                      className={styles.worButton}
                      onClick={() => downWorker(idx)}
                    >
                      <IoMdArrowRoundDown />
                    </div>
                  ) : (
                    <div className={styles.worButtonwhite}></div>
                  )}
                  <div
                    className={styles.worButton}
                    onClick={() => deleteWorker(idx)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>
              {open[idx] && (
                <div className={styles.worEdit}>
                  <div className={styles.top}>
                    <div className={styles.left}>
                      <div className={styles.imgWrapper}>
                        <img src={wor.photo} alt="" />
                        <button
                          onClick={() => {
                            setChangeIdx(idx);
                            return setNewWorker(!newWorker);
                          }}
                        >
                          Змінити
                        </button>
                      </div>
                    </div>
                    <div className={styles.right}>
                      <label htmlFor="">Ім'я</label>
                      <input
                        type="text"
                        value={wor.name}
                        onChange={(e) => {
                          const newWorkers = JSON.parse(
                            JSON.stringify(workers)
                          );
                          newWorkers[idx].name = e.target.value;
                          setWorkers([...newWorkers]);
                          return;
                        }}
                      />
                      {/* <label htmlFor="">Name</label>
                      <input
                        type="text"
                        value={wor.nameEn}
                        onChange={(e) => {
                          const newWorkers = JSON.parse(
                            JSON.stringify(workers)
                          );
                          newWorkers[idx].nameEn = e.target.value;
                          setWorkers([...newWorkers]);
                          return;
                        }}
                      /> */}
                      <label htmlFor="">Посада</label>
                      <input
                        type="text"
                        value={wor.position}
                        onChange={(e) => {
                          const newWorkers = JSON.parse(
                            JSON.stringify(workers)
                          );
                          newWorkers[idx].position = e.target.value;
                          setWorkers([...newWorkers]);
                          return;
                        }}
                      />
                      <label htmlFor="">Невидима</label>
                      <input
                        type="checkbox"
                        checked={wor.unvisible || false}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          const newWorkers = JSON.parse(
                            JSON.stringify(workers)
                          );
                          newWorkers[idx].unvisible = e.target.checked;
                          setWorkers([...newWorkers]);
                          return;
                        }}
                      />
                    </div>
                  </div>
                  <ReactQuill
                    theme="snow"
                    value={wor.text}
                    onChange={(e) => {
                      const newWorkers = JSON.parse(JSON.stringify(workers));
                      newWorkers[idx].text = e;
                      setWorkers(newWorkers);
                      return setValue;
                    }}
                  />
                  <div className={styles.btnWrapper}>
                    <button className={styles.addButton} onClick={saveWorkers}>
                      Зберегти
                    </button>
                  </div>
                  <div className={styles.buttomLine}></div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className={styles.addWorker}>
        <div className={styles.headLine}>Додати працівника</div>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.imgWrapper}>
              <img src={img} alt="" />
              <button onClick={() => setNewWorker1(!newWorker1)}>
                Змінити
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <label htmlFor="">Ім'я</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Посада</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
        <ReactQuill theme="snow" value={value1} onChange={setValue1} />
        <div className={styles.btnWrapper}>
          <button className={styles.addButton} onClick={addWorker}>
            Додати
          </button>
        </div>
        {newWorker && (
          <Uploader
            close={() => setNewWorker(false)}
            select={(src) => {
              const newWorkers = JSON.parse(JSON.stringify(workers));
              newWorkers[changeIdx].photo = src;
              setWorkers([...newWorkers]);
              return;
            }}
          />
        )}
        {newWorker1 && (
          <Uploader
            close={() => setNewWorker1(false)}
            select={(src) => setImg(src)}
          />
        )}
      </div>
    </div>
  );
};

export default About;
