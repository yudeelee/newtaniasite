import Link from 'next/link'
import styles from './styles.module.scss'

const MainServices = ({buh, yur, block, fin, finblock}) => {
  return (
    <>
    <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center" id="buhService">Бухгалтерські послуги</div>
          <div className={styles.serviceWrapper}>
            {buh?.map((buh, idx) => (
              <Link key={idx} href={`/services#${buh.slogId}`}>
                <div className={`${styles.service} ${idx == 0 ? styles.audit : ''}`}>
                {idx == 0 && <div className={styles.bestStamp}>Best seller</div>}
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Юридичні послуги</div>
          <div className={styles.serviceWrapper}>
            {yur?.map((buh, idx) => (
              <Link key={idx} href={`/legalservices#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Пакети Юридичних послуг</div>
          <div className={styles.serviceWrapper}>
            {block?.map((buh, idx) => (
              <Link key={idx} href={`/servicepackeges#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center" id="auditService">Аудиторські послуги</div>
          <div className={styles.serviceWrapper}>
            {fin?.map((buh, idx) => (
              <Link key={idx} href={`/financeservices#${buh.slogId}`}>
                <div className={`${styles.service} ${idx == 0 ? styles.audit : ''}`}>
                  {idx == 0 && <div className={styles.bestStamp}>Best seller</div>}
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className="container">
          <div className="title mt100 center">Пакети Фінансових послуг</div>
          <div className={styles.serviceWrapper}>
            {finblock?.map((buh, idx) => (
              <Link key={idx} href={`/financepackeges#${buh.slogId}`}>
                <div className={styles.service}>
                  <div className={styles.serHeader}>{buh.name}</div>
                  <div className={styles.serBody}>{buh.description}</div>
                  <div className={styles.serLink}>Читати більше &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainServices