import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      {/* <div className={styles.imgWrapper}>
        <img src="/img/Blue2.png" alt="" />
      </div> */}
      <div className={styles.container}>
        <div className={styles.ball1}></div>
        <div className={styles.ball2}></div>
        <div className={styles.ball3}></div>
        <div className={styles.ball4}></div>
      </div>
    </div>
  );
};

export default Loading;
