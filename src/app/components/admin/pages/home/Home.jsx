import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaRegSave } from 'react-icons/fa';
import YouTube from 'react-youtube';
import Uploader from '../../uploader/Uploader';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';

const InitialState = {
  topImg: '',
  title: '',
  subTitle: '',
  subTitle2: '',
  subTitle3: '',
  slog: '',
  youtubeId: '',
  aboutTitle: '',
  aboutText: '',
  propositionTitle: '',
  propositionItems: [],
  photos: [
    { src: '' },
    { src: '' },
    { src: '' },
    { src: '' },
    { src: '' },
    { src: '' },
    { src: '' },
  ],
  fishki: [
    { header: '', body: '' },
    { header: '', body: '' },
    { header: '', body: '' },
  ],
  services: [],
  clients: [],
  quiqTitle: '',
  quiqText: '',
};

const Home = () => {
  const [data, setData] = useState(InitialState);
  const [topImgOpen, setTopImgOpen] = useState(false);
  const [img1Open, setImg1Open] = useState(false);
  const [img2Open, setImg2Open] = useState(false);
  const [img3Open, setImg3Open] = useState(false);
  const [img4Open, setImg4Open] = useState(false);
  const [img5Open, setImg5Open] = useState(false);
  const [img6Open, setImg6Open] = useState(false);
  const [img7Open, setImg7Open] = useState(false);

  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/mainpage');
        setData(res.data);
        setValue(res.data.aboutText);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setData({ ...data, aboutText: value });
  }, [value]);

  const onReady = (event) => {
    const player = event.target;
    player.stopVideo();
  };
  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  const setPhoto = (idx, src) => {
    const photos = data.photos;
    photos[idx].src = src;
    setData({ ...data, photos });
  };

  const addProposition = () => {
    const props = data.propositionItems;
    props.push('');
    setData({ ...data, propositionItems: props });
  };

  const deleteProposition = (idx) => {
    let props = data.propositionItems;
    props = props.filter((p, i) => i !== idx);
    setData({ ...data, propositionItems: props });
  };

  const setProposition = (idx, value) => {
    let props = data.propositionItems;
    props[idx] = value;
    setData({ ...data, propositionItems: props });
  };

  const save = async () => {
    try {
      const res = await axios.put('/api/mainpage', data);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.buttons}>
        <h2>Головна</h2>
        <button onClick={save}>
          <FaRegSave />
          Зберегти
        </button>
      </div>
      <div className={styles.pagesBody}>{/* <Uploader /> */}</div>
      <div className={styles.line}>Шапка</div>
      <div className={styles.hero}>
        <div className={styles.topImage}>
          <img src={data.topImg} alt='' />
          <button onClick={() => setTopImgOpen(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topText}>
          <div className={styles.formControl}>
            <label htmlFor=''>Заголовок</label>
            <input
              type='text'
              value={data.title || ''}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor=''>Підзаголовок</label>
            <div className={styles.subtitles}>
              <input
                type='text'
                value={data.subTitle || ''}
                onChange={(e) => setData({ ...data, subTitle: e.target.value })}
              />
              <input
                type='text'
                value={data.subTitle2 || ''}
                onChange={(e) =>
                  setData({ ...data, subTitle2: e.target.value })
                }
              />
              <input
                type='text'
                value={data.subTitle3 || ''}
                onChange={(e) =>
                  setData({ ...data, subTitle3: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <label htmlFor=''>Слоган</label>
            <input
              type='text'
              value={data.slog || ''}
              onChange={(e) => setData({ ...data, slog: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className={styles.line}>Youtube</div>
      <div className={styles.youtubeWrapper}>
        <div className={styles.youtube}>
          <YouTube
            videoId={data.youtubeId || ''}
            onReady={onReady}
            onError={onError}
          />
        </div>
        <div className={styles.youtubeId}>
          <div className={styles.formControl}>
            <label htmlFor=''>Youtube ID</label>
            <input
              type='text'
              value={data.youtubeId || ''}
              onChange={(e) => setData({ ...data, youtubeId: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className={styles.line}>Про компанію</div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input
          type='text'
          value={data.aboutTitle || ''}
          onChange={(e) => setData({ ...data, aboutTitle: e.target.value })}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        {/* <textarea
          value={data.aboutText || ''}
          onChange={(e) => setData({ ...data, aboutText: e.target.value })}
        ></textarea> */}
        <ReactQuill theme='snow' value={value} onChange={setValue} />
      </div>
      <div className={styles.line}>Що ми пропонуємо</div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input
          type='text'
          value={data.propositionTitle || ''}
          onChange={(e) =>
            setData({ ...data, propositionTitle: e.target.value })
          }
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Пункти</label>
      </div>
      {data.propositionItems.map((prop, idx) => {
        return (
          <div
            key={idx}
            className={styles.formControl + ' ' + styles.deleteCtrl}
          >
            <input
              type='text'
              value={prop || ''}
              onChange={(e) => {
                let props = data.propositionItems;
                props[idx] = e.target.value;
                setData({ ...data, propositionItems: props });
              }}
            />
            <button onClick={() => deleteProposition(idx)}>
              <MdDeleteOutline />
            </button>
          </div>
        );
      })}

      {/* <div className={styles.formControl}>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <input type='text' />
      </div> */}
      <div className={styles.bButtons}>
        <button onClick={addProposition}>
          <IoIosAddCircleOutline />
          Додати
        </button>
      </div>
      <div className={styles.line}>Фотографії</div>
      <div className={styles.photos}>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[0]?.src} alt='' />
          <button onClick={() => setImg1Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[1]?.src} alt='' />
          <button onClick={() => setImg2Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[2]?.src} alt='' />
          <button onClick={() => setImg3Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[3]?.src} alt='' />
          <button onClick={() => setImg4Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[4]?.src} alt='' />
          <button onClick={() => setImg5Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[5]?.src} alt='' />
          <button onClick={() => setImg6Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
        <div className={styles.topImage + ' ' + styles.small}>
          <img src={data?.photos[6]?.src} alt='' />
          <button onClick={() => setImg7Open(true)}>
            <MdOutlinePublishedWithChanges />
            Змінити
          </button>
        </div>
      </div>
      <div className={styles.line}>Фішки</div>
      <div className={styles.fishki}>
        <div className={styles.formControl}>
          <label htmlFor=''>Заголовок</label>
          <input
            type='text'
            value={data?.fishki[0]?.header || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[0].header = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Текст</label>
          <input
            type='text'
            value={data?.fishki[0]?.body || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[0].body = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Заголовок</label>
          <input
            type='text'
            value={data?.fishki[1]?.header || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[1].header = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Текст</label>
          <input
            type='text'
            value={data?.fishki[1]?.body || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[1].body = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Заголовок</label>
          <input
            type='text'
            value={data?.fishki[2]?.header || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[2].header = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Текст</label>
          <input
            type='text'
            value={data?.fishki[2]?.body || ''}
            onChange={(e) => {
              let fish = data.fishki;
              fish[2].body = e.target.value;
              setData({ ...data, fishki: fish });
            }}
          />
        </div>
        {/* <div className={styles.formControl}>
          <label htmlFor=''>Заголовок</label>
          <input type='text' />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Текст</label>
          <input type='text' />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Заголовок</label>
          <input type='text' />
        </div>
        <div className={styles.formControl}>
          <label htmlFor=''>Текст</label>
          <input type='text' />
        </div> */}
      </div>
      <div className={styles.line}>Послуги</div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <input type='text' />
      </div>
      <div className={styles.line}>Клієнти</div>
      <div className={styles.topImage + ' ' + styles.small}>
        <img src='' alt='' />
        <button>
          <MdOutlinePublishedWithChanges />
          Змінити
        </button>
        <div className={styles.formControl}>
          <label htmlFor=''>Посилання</label>
          <input type='text' />
        </div>
      </div>
      <div className={styles.line}>Швидка дія</div>
      <div className={styles.formControl}>
        <label htmlFor=''>Заголовок</label>
        <input type='text' />
      </div>
      <div className={styles.formControl}>
        <label htmlFor=''>Текст</label>
        <textarea></textarea>
      </div>
      <div className={styles.buttons}>
        <h2>Головна</h2>
        <button>
          <FaRegSave />
          Зберегти
        </button>
      </div>
      {topImgOpen && (
        <Uploader
          close={() => setTopImgOpen(false)}
          select={(src) => setData({ ...data, topImg: src })}
        />
      )}
      {img1Open && (
        <Uploader
          close={() => setImg1Open(false)}
          select={(src) => setPhoto(0, src)}
        />
      )}
      {img2Open && (
        <Uploader
          close={() => setImg2Open(false)}
          select={(src) => setPhoto(1, src)}
        />
      )}
      {img3Open && (
        <Uploader
          close={() => setImg3Open(false)}
          select={(src) => setPhoto(2, src)}
        />
      )}
      {img4Open && (
        <Uploader
          close={() => setImg4Open(false)}
          select={(src) => setPhoto(3, src)}
        />
      )}
      {img5Open && (
        <Uploader
          close={() => setImg5Open(false)}
          select={(src) => setPhoto(4, src)}
        />
      )}
      {img6Open && (
        <Uploader
          close={() => setImg6Open(false)}
          select={(src) => setPhoto(5, src)}
        />
      )}
      {img7Open && (
        <Uploader
          close={() => setImg7Open(false)}
          select={(src) => setPhoto(6, src)}
        />
      )}
    </>
  );
};

export default Home;
