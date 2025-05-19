import { useEffect } from 'react';
import AffiliatedLogo from '../components/home/AffiliatedLogo';
import Career from '../components/home/Career';
import Explore from '../components/home/Explore';
import Footer from '../components/home/Footer';
import Learn from '../components/home/Learn';
import styles from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, []);

  return (
    <div className={styles.homeWrapper}>
      <div>
        <Career />
      </div>
      <div>
        <AffiliatedLogo />
      </div>
      <div>
        <Learn />
      </div>
      <div id="bottom-section">
        <Explore />
      </div>
    </div>
  )
}

export default Home
