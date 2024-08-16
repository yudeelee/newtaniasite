import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import { useState, useEffect, Fragment } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

const service = () => {
  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();

  const [opens, setOpens] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [textMore, setTextMore] = useState("");
  const [slogId, setSlogId] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([
    {
      name: "",
      from: false,
      price: 0,
      nominal: "",
    },
  ]);

  const [newService, setNewService] = useState({
    name: "",
    description: "",
    text: "",
    textMore: "",
    category: "",
    items: [
      {
        name: "",
        from: false,
        price: 0,
        nominal: "",
      },
    ],
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/servicepage");
        setServices(res.data.services);
        setOpens(new Array(res.data.services.length).fill(false));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addItem = () => {
    const newItems = JSON.parse(JSON.stringify(items));
    newItems.push({
      name: "",
      from: false,
      price: 0,
      nominal: "",
    });
    setItems(newItems);
  };

  const deleteItem = (idx) => {
    let newItems = JSON.parse(JSON.stringify(items));
    newItems = newItems.filter((item, sdx) => {
      return idx !== sdx;
    });
    setItems(newItems);
  };

  const addNewService = async () => {
    if (name === "" || description == "" || text == "") {
      console.log("error", newService);
      return;
    }
    const nService = {
      name,
      description,
      text,
      textMore,
      category,
      items,
    };
    try {
      const res = await axios.post("/api/servicepage", nService);
      setServices(res.data.services.services);
      setName("");
      setDescription("");
      setText("");
      setTextMore("");
      setSlogId("");
      setItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  const changeOpen = (idx) => {
    const open = JSON.parse(JSON.stringify(opens));
    open[idx] = !open[idx];
    setOpens(open);
  };

  const upWorker = async (idx) => {
    const newWorkers = JSON.parse(JSON.stringify(services));
    const x = newWorkers[idx];
    newWorkers[idx] = newWorkers[idx - 1];
    newWorkers[idx - 1] = x;
    try {
      const res = await axios.put("/api/servicepage", newWorkers);
      setServices(res.data.services.services);
    } catch (error) {
      console.log(error);
    }
  };

  const downWorker = async (idx) => {
    const newWorkers = JSON.parse(JSON.stringify(services));
    const x = newWorkers[idx];
    newWorkers[idx] = newWorkers[idx + 1];
    newWorkers[idx + 1] = x;
    try {
      const res = await axios.put("/api/servicepage", newWorkers);
      setServices(res.data.services.services);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWorker = async (idx) => {
    let newWorkers = JSON.parse(JSON.stringify(services));
    newWorkers = newWorkers.filter((wor, i) => i !== idx);
    console.log(newWorkers);
    try {
      const res = await axios.put("/api/servicepage", newWorkers);
      setServices(res.data.services.services);
    } catch (error) {
      console.log(error);
    }
  };

  const saveChanges = async () => {
    try {
      const res = await axios.put("/api/servicepage", services);
      setServices(res.data.services.services);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.services}>
      <div className={styles.allServices}>
        {services.map((ser, idx) => {
          const worHeader = opens[idx] ? styles.openHeader : "";
          const rouge = idx % 2 == 0 ? styles.rouge : "";
          const cls = styles.serviceWrapper + " " + rouge + " " + worHeader;
          return (
            <Fragment key={idx}>
              <div className={cls}>
                <div className={styles.serviceName}>{ser.name}</div>
                <div className={styles.serviceButtons}>
                  <div
                    className={styles.serButton}
                    onClick={() => {
                      return changeOpen(idx);
                    }}
                  >
                    <CiEdit />
                  </div>
                  {idx > 0 ? (
                    <div
                      className={styles.serButton}
                      onClick={() => upWorker(idx)}
                    >
                      <IoMdArrowRoundUp />
                    </div>
                  ) : (
                    <div className={styles.emptyField}></div>
                  )}
                  {idx < services.length - 1 ? (
                    <div
                      className={styles.serButton}
                      onClick={() => downWorker(idx)}
                    >
                      <IoMdArrowRoundDown />
                    </div>
                  ) : (
                    <div className={styles.emptyField}></div>
                  )}
                  <div
                    className={styles.serButton}
                    onClick={() => deleteWorker(idx)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>
              {opens[idx] && (
                <div className={styles.editService}>
                  <div className={styles.addService}>
                    <label htmlFor="addName">Назва</label>
                    <input
                      type="text"
                      id="addName"
                      value={ser.name || ""}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].name = e.target.value;
                        setServices(newService);
                      }}
                    />
                    <label htmlFor="addShortDescr">Короткий опис</label>
                    <input
                      type="text"
                      id="addShortDescr"
                      value={ser.description || ""}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].description = e.target.value;
                        setServices(newService);
                      }}
                    />
                    <label htmlFor="addDescription">Опис</label>
                    <ReactQuill
                      id="addDescription"
                      theme="snow"
                      value={ser.text}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].text = e;
                        setServices(newService);
                        return setValue2;
                      }}
                    />
                    <label htmlFor="addDescription">Читати більше</label>
                    <ReactQuill
                      id="addDescription"
                      theme="snow"
                      value={ser.textMore}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].textMore = e;
                        setServices(newService);
                        return setValue3;
                      }}
                    />
                    <label>Категорія</label>
                    <select
                      name=""
                      id=""
                      value={ser.category || ""}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].category = e.target.value;
                        setServices(newService);
                      }}
                    >
                      <option value="buh">Бухгалтерські</option>
                      <option value="yur">Юридичні</option>
                      <option value="block">Пакети</option>
                      <option value="fin">Фінансові</option>
                      <option value="finblock">Фінансові пакети</option>
                    </select>
                    <label htmlFor="addDescription">Технічна айдішка</label>
                    <input
                      type="text"
                      id="slogId"
                      value={ser.slogId || ""}
                      onChange={(e) => {
                        let newService = JSON.parse(JSON.stringify(services));
                        newService[idx].slogId = e.target.value;
                        setServices(newService);
                      }}
                    />
                    <div className={styles.items}>
                      {ser?.items.map((item, sdx) => {
                        return (
                          <div className={styles.item} key={sdx}>
                            <input
                              type="text"
                              className={styles.itemName}
                              value={item.name || ""}
                              onChange={(e) => {
                                let newService = JSON.parse(
                                  JSON.stringify(services)
                                );
                                newService[idx].items[sdx].name =
                                  e.target.value;
                                setServices(newService);
                              }}
                            />
                            <div className={styles.priceBlock}>
                              <input
                                id="html"
                                type="checkbox"
                                className={styles.itemFrom}
                                checked={item.from}
                                onChange={(e) => {
                                  let newService = JSON.parse(
                                    JSON.stringify(services)
                                  );
                                  newService[idx].items[sdx].from =
                                    e.target.checked || false;
                                  setServices(newService);
                                }}
                              />
                              <input
                                type="text"
                                className={styles.itemPrice}
                                value={item.price || ""}
                                onChange={(e) => {
                                  let newService = JSON.parse(
                                    JSON.stringify(services)
                                  );
                                  newService[idx].items[sdx].price =
                                    e.target.value;
                                  setServices(newService);
                                }}
                              />
                              <select
                                name=""
                                id=""
                                className={styles.itemNominal}
                                value={item.nominal}
                                onChange={(e) => {
                                  let newService = JSON.parse(
                                    JSON.stringify(services)
                                  );
                                  newService[idx].items[sdx].nominal =
                                    e.target.value;
                                  setServices(newService);
                                }}
                              >
                                <option value="">...</option>
                                <option value="грн">грн</option>
                                <option value="грн/рік">грн/рік</option>
                                <option value="грн/міс">грн/міс</option>
                                <option value="грн/год">грн/год</option>
                                <option value="$">$</option>
                                <option value="$/год">$/год</option>
                                <option value="$/міс">$/міс</option>
                              </select>
                              <div
                                className={styles.deleteItem}
                                onClick={() => {
                                  let newItems = JSON.parse(
                                    JSON.stringify(services)
                                  );
                                  newItems = newItems[idx].items.filter(
                                    (it, ddx) => sdx !== ddx
                                  );
                                  setServices(newItems);
                                }}
                              >
                                <MdDeleteOutline />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.buttons}>
                      <button
                        className={styles.addButton}
                        onClick={() => {
                          const newItems = JSON.parse(JSON.stringify(services));
                          newItems[idx].items.push({
                            name: "",
                            from: false,
                            price: 0,
                            nominal: "",
                          });
                          setServices(newItems);
                        }}
                      >
                        Додати пункт
                      </button>
                      <button
                        className={styles.addButton}
                        onClick={saveChanges}
                      >
                        Зберегти
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className={styles.hesderLine}>Додати послугу</div>
      <div className={styles.addService}>
        <label htmlFor="addName">Назва</label>
        <input
          type="text"
          id="addName"
          value={name}
          onChange={(e) => {
            // const newItems = JSON.parse(JSON.stringify(newService));
            // newItems.name = e.target.value;
            // setNewService(newItems);
            setName(e.target.value);
          }}
        />
        <label htmlFor="addShortDescr">Короткий опис</label>
        <input
          type="text"
          id="addShortDescr"
          value={description}
          onChange={(e) => {
            // const newItems = JSON.parse(JSON.stringify(newService));
            // newItems.description = e.target.value;
            // setNewService(newItems);
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="addDescription">Опис</label>
        <ReactQuill
          id="addDescription"
          theme="snow"
          value={text}
          onChange={(e) => {
            // const newItems = JSON.parse(JSON.stringify(newService));
            // newItems.text = e;
            // setNewService(newItems);
            setText(e);
            return setValue;
          }}
        />
        <label htmlFor="addDescription">Читати більше</label>
        <ReactQuill
          id="addDescription"
          theme="snow"
          value={textMore}
          onChange={(e) => {
            // const newItems = JSON.parse(JSON.stringify(newService));
            // newItems.textMore = e;
            // setNewService(newItems);
            setTextMore(e);
            return setValue1;
          }}
        />
        <label>Категорія</label>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="buh">Бухгалтерські</option>
          <option value="yur">Юридичні</option>
          <option value="block">Пакети</option>
          <option value="fin">Фінансові</option>
          <option value="finblock">Фінансові пакети</option>
        </select>
        <label htmlFor="addDescription">Технічна айдішка</label>
        <input
          type="text"
          id="slogId"
          value={slogId || ""}
          onChange={(e) => {
            setSlogId(e.target.value);
          }}
        />
        <div className={styles.items}>
          {items.map((ser, idx) => {
            return (
              <div className={styles.item} key={idx}>
                <input
                  type="text"
                  className={styles.itemName}
                  value={ser.name}
                  onChange={(e) => {
                    const newItems = JSON.parse(JSON.stringify(items));
                    newItems[idx].name = e.target.value;
                    setItems(newItems);
                  }}
                />
                <div className={styles.priceBlock}>
                  <input
                    id="html"
                    type="checkbox"
                    className={styles.itemFrom}
                    checked={ser.from || false}
                    onChange={(e) => {
                      const newItems = JSON.parse(JSON.stringify(items));
                      newItems[idx].from = e.target.checked || false;
                      setItems(newItems);
                    }}
                  />
                  <input
                    type="text"
                    className={styles.itemPrice}
                    value={ser.price}
                    onChange={(e) => {
                      const newItems = JSON.parse(JSON.stringify(items));
                      newItems[idx].price = e.target.value;
                      setItems(newItems);
                    }}
                  />
                  <select
                    name=""
                    id=""
                    className={styles.itemNominal}
                    value={ser.nominal}
                    onChange={(e) => {
                      const newItems = JSON.parse(JSON.stringify(items));
                      newItems[idx].nominal = e.target.value;
                      setItems(newItems);
                    }}
                  >
                    <option value="">...</option>
                    <option value="грн">грн</option>
                    <option value="грн/рік">грн/рік</option>
                    <option value="грн/міс">грн/міс</option>
                    <option value="грн/год">грн/год</option>
                    <option value="$">$</option>
                    <option value="$/год">$/год</option>
                    <option value="$/міс">$/міс</option>
                  </select>
                  <div
                    className={styles.deleteItem}
                    onClick={() => deleteItem(idx)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.addButton}
            onClick={() => {
              return addItem();
            }}
          >
            Додати пункт
          </button>
          <button
            className={styles.addButton}
            onClick={() => {
              //   setNewService({
              //     ...newService,
              //     name: '',
              //     description: '',
              //     text: '',
              //     textMore: '',
              //   });
              return addNewService();
            }}
          >
            Додати послугу
          </button>
        </div>
      </div>
    </div>
  );
};

export default service;
