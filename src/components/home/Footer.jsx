import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>for more information visit <a href="https://unilesa.edu.ng">University of Ilesa website</a> Or call</p>
        <p>+2348037124038</p>
        <p className={styles.copyright}>&#169; UNIVERSITY ICT DIRECTORATE</p>
      </div>
    </div>
  )
}

export default Footer
