import styles from "./styles.module.scss";
import { IoArrowUndo } from "react-icons/io5";

const GroupList = ({ items, selected, select }) => {
  return (
    <div className={styles.Bookmark}>
      {items.map((item) => (
        <div
          key={item.name}
          className={`${styles.listItem} ${
            selected == item._id ? styles.selected : ""
          }`}
          onClick={() => select(item._id)}
        >
          <div className={styles.word}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
