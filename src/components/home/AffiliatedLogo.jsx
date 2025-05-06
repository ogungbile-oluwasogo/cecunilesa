import styles from './AfiliatedLogo.module.css';
import 'aos/dist/aos.css';

const AffiliatedLogo = () => {
  return (
    <div className={styles.affiliatedWrapper}>
      <div className={styles.cecLogo}>
        <img src="/cec_logo.png" alt="" data-aos="fade-up"/>
      </div>
      <div className={styles.divFlex} data-aos="fade-up">
        <div>
            <img src="/unilesa_logo.png" alt="" />
        </div>
        <div>
            <h2>University Of Ilesa,</h2>
            <p>Ilesa Osun State</p>
        </div>
      </div>
    </div>
  )
}

export default AffiliatedLogo
