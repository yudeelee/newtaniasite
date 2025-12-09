import styles from "./styles.module.scss";

const Pagination = ({ page, total, goTo }) => {
  console.log(page, total);
  if (total > 10) {
    if (page < 7) {
      return (
        <div className={styles.pagination}>
          {[...new Array(7).fill(0)].map((pag, idx) => (
            <div
              key={idx}
              className={`${styles.pageIndex} ${
                page == idx + 1 ? styles.active : ""
              }`}
              onClick={() => goTo(idx + 1)}
            >
              {idx + 1}
            </div>
          ))}
          <div className={styles.dots}>...</div>
          {[...new Array(3).fill(0)].map((pag, idx) => (
            <div
              key={total + idx - 2}
              className={`${styles.pageIndex} ${
                page == total + idx - 2 ? styles.active : ""
              }`}
              onClick={() => goTo(total + idx - 2)}
            >
              {total + idx - 2}
            </div>
          ))}
        </div>
      );
    } else if (total - page >= 7 && total >= 12) {
      return (
        <div className={styles.pagination}>
          {[...new Array(3).fill(0)].map((pag, idx) => (
            <div
              key={idx}
              className={`${styles.pageIndex}`}
              onClick={() => goTo(idx + 1)}
            >
              {idx + 1}
            </div>
          ))}
          <div className={styles.dots}>...</div>
          {[...new Array(5).fill(0)].map((pag, idx) => (
            <div
              key={page - 2 + idx}
              className={`${styles.pageIndex} ${
                page == page + idx - 2 ? styles.active : ""
              }`}
              onClick={() => goTo(page + idx - 2)}
            >
              {page + idx - 2}
            </div>
          ))}
          <div className={styles.dots}>...</div>
          {[...new Array(3).fill(0)].map((pag, idx) => (
            <div
              key={total + idx - 2}
              className={`${styles.pageIndex} ${
                page == total + idx - 2 ? styles.active : ""
              }`}
              onClick={() => goTo(total + idx - 2)}
            >
              {total + idx - 2}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className={styles.pagination}>
          {[...new Array(3).fill(0)].map((pag, idx) => (
            <div
              key={idx}
              className={`${styles.pageIndex}`}
              onClick={() => goTo(idx + 1)}
            >
              {idx + 1}
            </div>
          ))}
          <div className={styles.dots}>...</div>
          {[...new Array(7).fill(0)].map((pag, idx) => (
            <div
              key={total - 6 + idx}
              className={`${styles.pageIndex} ${
                page == total - 6 + idx ? styles.active : ""
              }`}
              onClick={() => goTo(total - 6 + idx)}
            >
              {total - 6 + idx}
            </div>
          ))}
        </div>
      );
    }
  } else {
    return (
      <div className={styles.pagination}>
        {[...new Array(10).fill(0)].map((pag, idx) => (
          <div
            key={idx}
            className={`${styles.pageIndex} ${
              page == idx + 1 ? styles.active : ""
            }`}
            onClick={() => goTo(idx + 1)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    );
  }
};

export default Pagination;
