"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaFileArrowDown } from "react-icons/fa6";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import BlackList from "../blackList/BlackList";
import Bookmark from "../bookmark/Bookmark";
import GroupList from "../groupList/GroupList";
import Pagination from "../pagination/Pagination";

const Keywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [keywordsBlack, setKeywordsBlack] = useState([]);
  const [keywordsBookmark, setKeywordsBookmark] = useState([]);
  const [groups, setGroups] = useState([]);
  const [addGroup, setAddGroup] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(2);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [pagination, setPagination] = useState({
    limit: null,
    page: null,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchDataEmpty = async () => {
      try {
        const res = await fetch(
          "/api/keywords?page=1&limit=50&sortField=Keyword&sortOrder=asc&group=empty"
        );
        const data = await res.json();
        setKeywords(data.items);
        setPagination({
          limit: data.limit,
          page: data.page,
          total: data.total,
          totalPages: data.totalPages,
        });
        console.log(data.total / 50);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataBlack = async () => {
      try {
        const res = await fetch(
          "/api/keywords?page=1&limit=50&sortField=Keyword&sortOrder=asc&group=Black"
        );
        const data = await res.json();
        setKeywordsBlack(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataBookmark = async () => {
      try {
        const res = await fetch(
          "/api/keywords?page=1&limit=50&sortField=Keyword&sortOrder=asc&group=Later"
        );
        const data = await res.json();
        setKeywordsBookmark(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataBookmark();
    fetchDataBlack();
    fetchDataEmpty();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

  const addNewGroup = async () => {
    if (addGroup.trim() != "") {
      try {
        const res = await fetch("/api/groups", {
          method: "POST",
          body: JSON.stringify({ name: addGroup }),
        });
        const data = await res.json();
        const newGroups = [...groups];
        newGroups.push(data.name);
        setGroups(newGroups);
      } catch (error) {}
    }
  };

  const ChangeGroup = async (id, group, from) => {
    try {
      const res = await fetch(`/api/keywords/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          group: group,
        }),
      });
      const data = await res.json();
      let oldList;
      if (from == "Black") {
        oldList = [...keywordsBlack.filter((g) => g._id != id)];
        setKeywordsBlack(oldList);
      } else if (from == "Later") {
        oldList = [...keywordsBookmark.filter((g) => g._id != id)];
        setKeywordsBookmark(oldList);
      } else if (from == "empty") {
        oldList = [...keywords.filter((g) => g._id != id)];
        setKeywords(oldList);
      }
      if (group == "Later") {
        const newKeywordsBookmark = [...keywordsBookmark];
        newKeywordsBookmark.unshift(data);
        setKeywordsBookmark(newKeywordsBookmark);
      } else if (group == "Black") {
        const newKeywordsBookmark = [...keywordsBlack];
        newKeywordsBookmark.unshift(data);
        setKeywordsBlack(newKeywordsBookmark);
      } else if (group == "empty") {
        const newKeywordsBookmark = [...keywords];
        newKeywordsBookmark.unshift(data);
        setKeywords(newKeywordsBookmark);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const goTo = async (idx) => {
    try {
      const res = await fetch(
        `/api/keywords?page=${idx}&limit=50&sortField=Keyword&sortOrder=asc&group=empty`
      );
      const data = await res.json();
      setKeywords(data.items);
      setPagination({
        limit: data.limit,
        page: data.page,
        total: data.total,
        totalPages: data.totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Keywords}>
      <div className={styles.keywordsListWrapper}>
        <div className={styles.keywordsList}>
          <div className={styles.keywordTitle}>
            <div className={styles.name}>Ключове слово</div>
            <div className={styles.count}>Запити / міс.</div>
            <div className={styles.icon}>Ч/С</div>
            <div className={styles.icon}>Н/П</div>
            <div className={styles.icon}>Група</div>
          </div>
          {keywords.map((item) => (
            <div key={item.Keyword} className={styles.keyword}>
              <div className={styles.name}>{item.Keyword}</div>
              <div className={styles.count}>{item.avgMonthlySearches}</div>
              <div className={styles.trash}>
                <FaTrashAlt
                  onClick={() => ChangeGroup(item._id, "Black", "empty")}
                />
              </div>
              <div
                className={styles.bookmark}
                onClick={() => ChangeGroup(item._id, "Later", "empty")}
              >
                <IoBookmarksOutline />
              </div>
              <div
                className={`${styles.move} ${
                  !selectedGroup || selectedCategory != 2 ? styles.disabled : ""
                } `}
                onClick={() => {
                  if (selectedCategory == 2 && selectedGroup != null) {
                    ChangeGroup(item._id, selectedGroup, "empty");
                  }
                }}
              >
                <FaFileArrowDown />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <button onClick={() => goTo(1)}>Підвантажити ще...</button>
        </div>
        <Pagination
          page={pagination.page}
          total={pagination.totalPages}
          goTo={(idx) => goTo(idx)}
        />
      </div>
      <div className={styles.groupsWrapper}>
        <div className={styles.groupHeader}>Групи</div>
        <div className={styles.groups}>
          <div
            className={`${styles.groupMove} ${
              selectedCategory == 2 ? styles.selected : ""
            }`}
            onClick={() => setSelectedCategory(2)}
          >
            <AiOutlineFileAdd />
          </div>
          <div
            className={`${styles.groupBookmark} ${
              selectedCategory == 1 ? styles.selected : ""
            }`}
            onClick={() => setSelectedCategory(1)}
          >
            <IoBookmarksOutline />
          </div>
          <div
            className={`${styles.groupTrash} ${
              selectedCategory == 0 ? styles.selected : ""
            }`}
            onClick={() => setSelectedCategory(0)}
          >
            <FaTrashAlt />
          </div>
        </div>
        <div className={styles.groupKeywords}>
          <div className={styles.addGroup}>
            <input
              type="text"
              value={addGroup || ""}
              onChange={(e) => setAddGroup(e.target.value)}
            />
            <button onClick={addNewGroup}>
              <FaPlus />
            </button>
          </div>
          <div className={styles.groupKeywordsList}>
            {selectedCategory == 2 && (
              <GroupList
                items={groups}
                selected={selectedGroup || null}
                select={(selectedId) => setSelectedGroup(selectedId)}
              />
            )}
            {selectedCategory == 0 && <BlackList items={keywordsBlack} />}
            {selectedCategory == 1 && <Bookmark items={keywordsBookmark} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
