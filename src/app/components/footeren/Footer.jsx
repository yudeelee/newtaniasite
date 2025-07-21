import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Menu</div>
              </li>
              <li>
                <Link href="/en">Home</Link>
              </li>
              <li>
                <Link href="/en/about">About us</Link>
              </li>
              <li>
                <Link href="/en/services">Our Services</Link>
              </li>
              <li>
                <Link href="/en/contact">Order</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Our Services</div>
              </li>
              <li>
                <Link href="/en/services">Accounting services</Link>
              </li>
              <li>
                <Link href="/en/legalservices">Legal services</Link>
              </li>
              <li>
                <Link href="/en/servicepackeges">Legal Services Packages</Link>
              </li>
              <li>
                <Link href="/en/financeservices">Audit services</Link>
              </li>
              <li>
                <Link href="/en/financepackeges">
                  Financial Services Packages
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <div className={styles.menuHeader}>Join in</div>
              </li>
              <li>
                <a href="https://www.instagram.com/tanyaselezniova_accountant/">
                  <img src="/img/insta.png" alt="" />
                </a>
                <a href="https://t.me/tanyaselezniova_accountant">
                  <img src="/img/teleg.png" alt="" />
                </a>
                <a href="https://www.youtube.com/@consulting-accountant">
                  <img src="/img/youtu.png" alt="" />
                </a>
              </li>
              <li>+380734187147</li>
              <li>audit@consulting.lviv.ua</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footTextWrapper}>
        <div className={styles.footText}>
          <Link href="/privacypolicy">Privacy Policy</Link>
          <Link href="/oferta">Public offer</Link>
        </div>
        <div className={styles.footText}>
          LLC "ACCOUNTANT CONSULTANT" Individual tax number 45494012, Lviv
        </div>
      </div>
    </div>
  );
};

export default Footer;
