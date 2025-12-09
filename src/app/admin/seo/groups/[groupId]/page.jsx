"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const page = () => {
  const path = usePathname().substring(18);

  const [group, setGroup] = useState({});
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await fetch(`/api/groups/${path}`);
        const data = await res.json();
        setGroup(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/keywords?page=1&limit=1000&sortField=Keyword&sortOrder=asc&group=${path}`
        );
        const data = await res.json();
        setKeywords(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroup();
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.groupTitle}>{group.name}</div>
      <div className={styles.groupWrapper}>
        <div className={styles.keywords}>
          {keywords.map((keyword, idx) => (
            <div key={keyword.Keyword} className={styles.keyword}>
              {keyword.Keyword}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
