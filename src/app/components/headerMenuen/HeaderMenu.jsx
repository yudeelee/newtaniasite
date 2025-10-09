"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { useState } from "react";
import Language from "../language/Language";

const HeaderMenu = ({ active }) => {
  const [burger, setBurger] = useState(false);
  return (
    <div className={styles.HeaderMenu}>
      <div className={`container ${styles.menuWrapper}`}>
        <div className={styles.logo}>
          <img src="/img/Blue2.png" alt="" />
        </div>
        <nav className={styles.menu}>
          <Language />
          <ul className={styles.topMenu}>
            <li className={active === "home" ? styles.active : ""}>
              <Link href="/en">Home</Link>
            </li>
            <li className={active === "about" ? styles.active : ""}>
              <Link href="/en/about">About Us</Link>
            </li>
            <li className={active === "services" ? styles.active : ""}>
              Our Services
              <ul className={styles.serviceMenu}>
                <li className={styles.serviceLink}>
                  <Link href="/en/services">Accounting services</Link>
                </li>
                <li className={styles.serviceLink}>
                  <Link href="/en/legalservices">Legal services</Link>
                </li>
                <li className={styles.serviceLink}>
                  <Link href="/en/servicepackeges">
                    Legal Services Packages
                  </Link>
                </li>
                <li className={styles.serviceLink}>
                  <Link href="/en/financeservices">Audit services</Link>
                </li>
                <li className={styles.serviceLink}>
                  <Link href="/en/financepackeges">
                    Financial Services Packages
                  </Link>
                </li>
              </ul>
            </li>
            <li className={active === "contact" ? styles.active : ""}>
              <Link href="/en/contact">Order</Link>
            </li>
          </ul>
          <div
            className={`${styles.burger}`}
            onClick={() => setBurger(!burger)}
          >
            <div
              className={`${styles.line1} ${burger ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.line2} ${burger ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.line3} ${burger ? styles.open : ""}`}
            ></div>
          </div>
          <ul className={`${styles.burgerMenu} ${!burger ? styles.open : ""}`}>
            <li className={active === "home" ? styles.active : ""}>
              <Link href="/en">Home</Link>
            </li>
            <li className={active === "about" ? styles.active : ""}>
              <Link href="/en/about">About Us</Link>
            </li>
            <li className={styles.serviceLink}>
              <Link href="/en/services">Accounting services</Link>
            </li>
            <li className={styles.serviceLink}>
              <Link href="/en/legalservices">Legal services</Link>
            </li>
            <li className={styles.serviceLink}>
              <Link href="/en/servicepackeges">Legal Services Packages</Link>
            </li>
            <li className={styles.serviceLink}>
              <Link href="/en/financeservices">Audit services</Link>
            </li>
            <li className={styles.serviceLink}>
              <Link href="/en/financepackeges">
                Financial Services Packages
              </Link>
            </li>
            <li className={active === "contact" ? styles.active : ""}>
              <Link href="/en/contact">Order</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
