import styles from "./styles.module.scss";
import { IoArrowUndo } from "react-icons/io5";

const Bookmark = ({ items }) => {
  return (
    <div className={styles.Bookmark}>
      {items.map((item) => (
        <div key={item.Keyword} className={styles.listItem}>
          <div className={styles.word}>{item.Keyword}</div>
          <button>
            <IoArrowUndo />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
