import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = () => {

    const [isMobileMenuOPen, setIsMobileMenuOPen] = useState(false);

    const toggleMenuNav = () => setIsMobileMenuOPen(!isMobileMenuOPen);

    const handleScroll = (e) => {
        e.preventDefault();
        const element = document.getElementById("bottom-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }

        setIsMobileMenuOPen(false);
      };

useEffect(() => {
  if (isMobileMenuOPen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  // Cleanup when component unmounts
  return () => {
    document.body.classList.remove('no-scroll');
  };
}, [isMobileMenuOPen]);


  return (
    <>
      <div className={styles.heading}>
        <div className={styles.innerHeading}>
            <a href="https://unilesa.edu.ng">
                <div className={styles.logoWrapper}>
                    <img src="/unilesa_logo.png" alt="" />
                </div>
            </a>
            <div>
                <h2>University of Ilesa, </h2>
                <p>Ilesa Osun State</p>
            </div>
        </div>
        <div className={styles.linkHeading}>
            <a href="#bottom-section" onClick={handleScroll}>
                Internships
            </a>
            <a href="#bottom-section" onClick={handleScroll}>
                Study and Work Abroad
            </a>
            <a href="#bottom-section" onClick={handleScroll}>
                Learn English
            </a>
            <a href="#bottom-section" onClick={handleScroll}>
                Admissions
            </a>
            <a href="#bottom-section" onClick={handleScroll}>
                Language Course
            </a>
        </div>
        <div className={styles.mobileToggleMenu} onClick={toggleMenuNav}>
            <div className={`${styles.icon} ${!isMobileMenuOPen ? styles.show : ''}`}>
                {/* Hamburger */}
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H30H4ZM4 17H30H4ZM4 30H30H4Z" fill="white"/>
                <path d="M4 4H30M4 17H30M4 30H30" stroke="white" strokeWidth="7.83333" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={`${styles.icon} ${isMobileMenuOPen ? styles.show : ''}`}>
                {/* Close (X) */}
                <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <div className={`${styles.mobileMenu} ${isMobileMenuOPen ? styles.open : styles.close}`}>
            <nav className={styles.mobileNavLinks}>
                <a href="#bottom-section" onClick={handleScroll}>➤ Internships</a>
                <a href="#bottom-section" onClick={handleScroll}>➤ Study and Work Abroad</a>
                <a href="#bottom-section" onClick={handleScroll}>➤ Learn English</a>
                <a href="#bottom-section" onClick={handleScroll}>➤ Admissions</a>
                <a href="#bottom-section" onClick={handleScroll}>➤ Language Course</a>
            </nav>
        </div>
      </div>
    </>
  )
}

export default Header
