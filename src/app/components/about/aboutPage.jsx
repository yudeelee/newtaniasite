import styles from "./styles.module.scss";

const AboutPage = async ({ eng = false }) => {
  const data = await getData();

  let par = 0;

  let innn = -1;

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="title">{eng ? "About Us" : "Про нас"}</h1>
        </div>
        {data?.map((wor, idx) => {
          const cls = par % 2 == 0 ? styles.person : styles.personReverse;
          if (!wor.unvisible) {
            innn = innn + 1;
            par = par + 1;
            return (
              <div className={cls} key={idx}>
                <div className={styles.personText}>
                  <div className="redText">
                    {!eng
                      ? wor.position
                      : wor.positionen != ""
                      ? wor.positionen
                      : wor.position}
                  </div>
                  <h2 className="title">
                    {!eng ? wor.name : wor.nameen != "" ? wor.nameen : wor.name}
                  </h2>
                  <div
                    className={"text" + " " + "mt20"}
                    dangerouslySetInnerHTML={{
                      __html: !eng
                        ? wor.text
                        : wor.texten.replace(/<[^>]*>/g, "") != ""
                        ? wor.texten
                        : wor.text,
                    }}
                  />
                </div>
                <div className={styles.photo}>
                  <img src={wor.photo} alt="" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AboutPage;

async function getData() {
  try {
    const res = await fetch("https://consulting.lviv.ua/api/aboutpage", {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.workers;
  } catch (error) {
    return error;
  }
}
