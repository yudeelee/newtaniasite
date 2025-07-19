import styles from './styles.module.scss';

const MainFishki = ({data}) => {
  return (
    <>
    <div className={styles.fishki + " " + "mt100"}>
        <div className={"container" + " " + styles.fishWrapper}>
        {data.fishki.map((fish, idx) => <div className={styles.fishka}>
            <div className={styles.fishHeader}>{fish.header}</div>
            <div className={styles.fishBody}>{fish.body}</div>
          </div>)}          
        </div>
      </div>
    </>
  )
}

export default MainFishki