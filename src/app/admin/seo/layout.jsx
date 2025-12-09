import SeoHeader from "@/app/components/admin/seo/seoHeader/SeoHeader";
import styles from "./styles.module.scss";
import UploadCsv from "@/app/components/admin/seo/uploader/uploaderCsv";

const layout = ({ children }) => {
  return (
    <div className={styles.seoWrapper}>
      <div className={styles.title}>
        <h1>Seo Панель</h1>
        <UploadCsv />
      </div>
      <SeoHeader />
      {children}
    </div>
  );
};

export default layout;
