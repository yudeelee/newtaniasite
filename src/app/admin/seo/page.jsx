import styles from "./styles.module.scss";
import Keywords from "@/app/components/admin/seo/keywords/Keywords";
const page = () => {
  return (
    <div className={styles.seoWrapper}>
      <Keywords />
    </div>
  );
};

export default page;
