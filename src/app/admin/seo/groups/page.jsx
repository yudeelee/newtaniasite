"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const page = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("/api/groups");
        const data = await res.json();
        const newGroups = data.filter(
          (g) => g.name != "Black" && g.name != "Later"
        );
        setGroups(newGroups);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroups();
  }, []);

  return (
    <>
      <div className={styles.groupsTitle}>Групи ключових слів</div>
      <div className={styles.groupsWrapper}>
        <div className={styles.groupsList}>
          {groups.map((group) => (
            <div key={group.name} className={styles.group}>
              <Link href={`/admin/seo/groups/${group._id}`}>
                {group.name} {"[ "} {group.keywordsCount} {" ]"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
