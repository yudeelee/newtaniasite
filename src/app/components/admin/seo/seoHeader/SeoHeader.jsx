"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

const SeoHeader = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.SeoHeader}>
      <ul>
        <li className={`${pathname == "/admin/seo" ? styles.active : ""}`}>
          <Link href="/admin/seo">Нові</Link>
        </li>
        <li
          className={`${pathname == "/admin/seo/groups" ? styles.active : ""}`}
        >
          <Link href="/admin/seo/groups">Групи</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SeoHeader;
