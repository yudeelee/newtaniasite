import styles from "./styles.module.scss";

const MainFishki = ({ data, eng = false }) => {
  return (
    <>
      <div className={styles.fishki + " " + "mt100"}>
        <div className={"container" + " " + styles.fishWrapper}>
          {!eng
            ? data.fishki.map((fish, idx) => (
                <div key={idx} className={styles.fishka}>
                  <div className={styles.fishHeader}>{fish.header}</div>
                  <div className={styles.fishBody}>{fish.body}</div>
                </div>
              ))
            : data.fishkien.map((fish, idx) => (
                <div key={idx} className={styles.fishka}>
                  <div className={styles.fishHeader}>{fish.header}</div>
                  <div className={styles.fishBody}>{fish.body}</div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default MainFishki;
