import { Link } from 'react-router-dom';
import styles from './Career.module.css';
import 'aos/dist/aos.css';

const Career = () => {

    const handleScroll = (e) => {
        e.preventDefault();
        const element = document.getElementById("bottom-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className={styles.careerWrapper}>
      <div>
        <h1 data-aos="fade-up">Welcome to CEC International Career Centre!</h1>
        <p data-aos="fade-up" data-aos-delay="200">
            Canada is renowned for its high-quality education system, but we also know that today, 
            finding a job has become a real challenge. 
            We need to make sure education goes along with professional training that brings 
            together the best business actors and expertise for our students.
        </p>
        <a href="#bottom-section" onClick={handleScroll}>
            EXPLORE NOW
        </a>
      </div>
      <div>
        <img src="/career_woman.jpg" alt="Career Image" data-aos="flip-left" />
      </div>
    </div>
  )
}

export default Career
