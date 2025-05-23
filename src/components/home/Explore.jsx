import { useState } from 'react';
import styles from './Explore.module.css';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Explore = () => {

    const [isInternshipOpen, setIsInternshipOpen] = useState(false);
    const [isStudyOpen, setIsStudyOpen] = useState(false);
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
    const [isTrainingOpen, setIsTrainingOpen] = useState(false);

    const toggleInterships = () => setIsInternshipOpen(!isInternshipOpen);
    const toggleStudy = () => setIsStudyOpen(!isStudyOpen);
    const toggleLearn = () => setIsLearnOpen(!isLearnOpen);
    const toggleAdmission = () => setIsAdmissionOpen(!isAdmissionOpen);
    const toggleTraining = () => setIsTrainingOpen(!isTrainingOpen);

  return (
    <div className={styles.exploreWrapper}>
      <h2>Explore</h2>
      <div className={styles.flexExplore} data-aos="fade-up" onClick={toggleInterships}>
        <p>Internships</p>
        <span>
            {isInternshipOpen ? 
            <svg width="21" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98309 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.002612 8.12876 4.26302e-05 7.82056C-0.00252674 7.51236 0.111138 7.21543 0.316557 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 0 7.49319 0C7.79221 0 8.079 0.123794 8.29047 0.344158L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="white"/>
            </svg>
             : 
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5378 0.458879C20.2417 0.165059 19.8402 1.81659e-08 19.4216 0C19.0029 -1.81659e-08 18.6014 0.165059 18.3054 0.458879L10.4905 8.21692L2.67556 0.458878C2.3778 0.173385 1.979 0.0154114 1.56505 0.0189824C1.1511 0.0225533 0.755126 0.187383 0.462409 0.477969C0.169692 0.768556 0.0036568 1.16165 5.96823e-05 1.57259C-0.00353743 1.98352 0.155594 2.37942 0.443179 2.67501L9.37428 11.5411C9.67034 11.8349 10.0718 12 10.4905 12C10.9091 12 11.3106 11.8349 11.6067 11.5411L20.5378 2.67501C20.8337 2.3811 21 1.98253 21 1.56695C21 1.15136 20.8337 0.752787 20.5378 0.458879Z" fill="white"/>
            </svg>
            }
        </span>
      </div>
      {isInternshipOpen && 
      <div className={styles.displayToggle} data-aos="fade-up">
        <p>
            Embark on a transformative journey with our globally enriching internship programme. Gain hands-on experience, expand your professional network, and enhance your employability while immersing yourself in diverse cultures and work environments.
        </p>
        <h4>Requirements:</h4>
        <ul>
            <li>Age limit: 18 - 35 years</li>
            <li>Internship applicants must be current students who have completed 2 years of their programme or recent graduates with Bachelor degrees.</li>
            <li>Passing the Canadian Internship Tests is mandatory for internship consideration. The tests assess skills relevant to the internship opportunities.</li>
        </ul>
        <h4>Procedures:</h4>
        <ul>
            <li>Fill out the registration form.</li>
            <li>Pay Canadian Internship Test fee $70 and take the test.</li>
            <li>Subscribe to the CEC job portal to work remotely as an intern. $100(optional)</li>
            <li>Get two months of unpaid internship and four months of paid internship</li>
            <li>Interns earn between $5-$35 per hour for Remote interns and $3000-$4000 for On-site interns.</li>
        </ul>
        <div className={styles.marginDiv}>
            <Link to='internship'>Apply Now</Link>
        </div>
      </div> }
      <hr />
      <div className={styles.flexExplore} data-aos="fade-up" onClick={toggleStudy}>
        <p>Study and work Abroad</p>
        <span>
            {isStudyOpen ? 
            <svg width="21" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98309 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.002612 8.12876 4.26302e-05 7.82056C-0.00252674 7.51236 0.111138 7.21543 0.316557 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 0 7.49319 0C7.79221 0 8.079 0.123794 8.29047 0.344158L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="white"/>
            </svg>
             : 
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5378 0.458879C20.2417 0.165059 19.8402 1.81659e-08 19.4216 0C19.0029 -1.81659e-08 18.6014 0.165059 18.3054 0.458879L10.4905 8.21692L2.67556 0.458878C2.3778 0.173385 1.979 0.0154114 1.56505 0.0189824C1.1511 0.0225533 0.755126 0.187383 0.462409 0.477969C0.169692 0.768556 0.0036568 1.16165 5.96823e-05 1.57259C-0.00353743 1.98352 0.155594 2.37942 0.443179 2.67501L9.37428 11.5411C9.67034 11.8349 10.0718 12 10.4905 12C10.9091 12 11.3106 11.8349 11.6067 11.5411L20.5378 2.67501C20.8337 2.3811 21 1.98253 21 1.56695C21 1.15136 20.8337 0.752787 20.5378 0.458879Z" fill="white"/>
            </svg>
            }
        </span>
      </div>
      {isStudyOpen && 
      <div className={styles.displayToggle} data-aos="fade-up">
        <h4>1. Scholarships</h4>
        <ul>
            <li>Explore scholarship opportunities with CEC across Canada, USA and Europe.</li>
        </ul>
        <h4>2. Medical Exams Prep (NCLEX):</h4>
        <ul>
            <li>Fulfil your nursing dreams abroad: Pass the NCLEX-RN on the first try with CEC. NCLEX exam is your gateway to prove your excellence and start working as a registered nurse in countries like Canada, US, Australia etc…</li>
        </ul>
        <h4>International Employability Test:</h4>
        <p>This is an international examination for employers who seek experienced professionals to work internationally from anywhere in the world. These exams will give a full breakdown of the candidates strengths and weaknesses based on their test results.</p>
        <h4>Requirements:</h4>
        <ul>
            <li>Age limit: 18 - 35 years</li>
            <li>No experience required.</li>
            <li>Passing the International Employability Test is mandatory for working with organizations abroad on our platform.</li>
        </ul>
        <h4>Procedures:</h4>
        <ul>
            <li>Fill out the registration form.</li>
            <li>Pay International Employability Test fee.</li>
            <li>Passing the International Employability Test is mandatory for consideration.</li>
            <li>One month of unpaid internship and after one month, employees will receive monthly payments.</li>
            <li>International Employability Test fee: $90</li>
        </ul>
        <div className={styles.marginDiv}>
            <Link to='nclex/register'>Apply Now</Link>
        </div>
      </div> }
      <hr />
      <div className={styles.flexExplore} data-aos="fade-up" onClick={toggleLearn}>
        <p>Learn English</p>
        <span>
            {isLearnOpen ? 
            <svg width="21" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98309 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.002612 8.12876 4.26302e-05 7.82056C-0.00252674 7.51236 0.111138 7.21543 0.316557 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 0 7.49319 0C7.79221 0 8.079 0.123794 8.29047 0.344158L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="white"/>
            </svg>
             : 
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5378 0.458879C20.2417 0.165059 19.8402 1.81659e-08 19.4216 0C19.0029 -1.81659e-08 18.6014 0.165059 18.3054 0.458879L10.4905 8.21692L2.67556 0.458878C2.3778 0.173385 1.979 0.0154114 1.56505 0.0189824C1.1511 0.0225533 0.755126 0.187383 0.462409 0.477969C0.169692 0.768556 0.0036568 1.16165 5.96823e-05 1.57259C-0.00353743 1.98352 0.155594 2.37942 0.443179 2.67501L9.37428 11.5411C9.67034 11.8349 10.0718 12 10.4905 12C10.9091 12 11.3106 11.8349 11.6067 11.5411L20.5378 2.67501C20.8337 2.3811 21 1.98253 21 1.56695C21 1.15136 20.8337 0.752787 20.5378 0.458879Z" fill="white"/>
            </svg>
            }
        </span>
      </div>
      {
      isLearnOpen && 
      <div className={styles.displayToggle} data-aos="fade-up">
        <p>
        Acquire fluency in English through our online classes and courses, provided by the foremost professionals in the field of English language instruction.
        </p>
        <h4>English Placement Test English for Adults(ESL):</h4>
        <ul>
            <li>Study in a CEC centre in your country</li>
            <li>Receive instruction from the foremost authorities in English language instruction</li>
            <li>Engage in physical, private 1-1 or group sessions</li>
            <li>Limited availability per country</li>
        </ul>
        <div className={styles.planWrapper}>
            <div>
                <h4>Silver Plan</h4>
                <p>(5 Class Credit)</p>
                <p>140USD($7 PERCLASS)</p>
                <p>20 Lessons per Level</p>
                <p>55 Minutes</p>
                <p>100% Online</p>
                <p>Pay monthly & cancel anytime</p>
                <br />
                <div><a href="">APPLY NOW</a></div>
            </div>
            <div>
                <h4>Gold Plan</h4>
                <p>(10 class credits)</p>
                <p>240USD($12 PERCLASS)</p>
                <p>20 Lessons per Level</p>
                <p>40 Minutes</p>
                <p>100% Online</p>
                <p>Pay monthly & cancel anytime</p>
                <br />
                <div><a href="">APPLY NOW</a></div>
            </div>
            <div>
                <h4>Plantinum Plan</h4>
                <p>.</p>
                <p>240USD($12 PERCLASS)</p>
                <p>20 Lessons per Level</p>
                <p>40 Minutes</p>
                <p>100% Online</p>
                <p>Pay monthly & cancel anytime</p>
                <br />
                <div><a href="">APPLY NOW</a></div>
            </div>
        </div>
      </div>
        }
      <hr />
      <div className={styles.flexExplore} data-aos="fade-up" onClick={toggleAdmission}>
        <p>Admissions</p>
        <span>
            {isAdmissionOpen ? 
            <svg width="21" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98309 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.002612 8.12876 4.26302e-05 7.82056C-0.00252674 7.51236 0.111138 7.21543 0.316557 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 0 7.49319 0C7.79221 0 8.079 0.123794 8.29047 0.344158L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="white"/>
            </svg>
             : 
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5378 0.458879C20.2417 0.165059 19.8402 1.81659e-08 19.4216 0C19.0029 -1.81659e-08 18.6014 0.165059 18.3054 0.458879L10.4905 8.21692L2.67556 0.458878C2.3778 0.173385 1.979 0.0154114 1.56505 0.0189824C1.1511 0.0225533 0.755126 0.187383 0.462409 0.477969C0.169692 0.768556 0.0036568 1.16165 5.96823e-05 1.57259C-0.00353743 1.98352 0.155594 2.37942 0.443179 2.67501L9.37428 11.5411C9.67034 11.8349 10.0718 12 10.4905 12C10.9091 12 11.3106 11.8349 11.6067 11.5411L20.5378 2.67501C20.8337 2.3811 21 1.98253 21 1.56695C21 1.15136 20.8337 0.752787 20.5378 0.458879Z" fill="white"/>
            </svg>
            }
        </span>
      </div>
      {isAdmissionOpen &&
      <div className={styles.displayToggle} data-aos="fade-up">
        <h4>Take Duolingo with CEC</h4>
        <p>
            The Duolingo English Test is a modern English proficiency assessment for today’s international students and institutions. The test is available online, on demand. You don’t have to make an appointment or travel to a test centre—you can take the test from your home via a computer and webcam.
        </p>
        <p>
        Traditional English proficiency exams are often difficult to schedule, require travel to a test centre, have long and stressful testing experiences, and cost over $200 USD. The Duolingo English Test can be taken online and results are available within 48 hours, and you can share your results with an unlimited number of institutions.
        </p>
        <p>
        Test Fee: The Duolingo English Tests costs $49 USD plus applicable taxes depending on the location of the purchase. Duolingo accepts all major credit cards and PayPal. After you pay for your Duolingo test, you will have 90 days to take the test starting from your original purchase date.
        </p>
        <h4>Prepare for Duolingo:</h4>
        <p>
            Do you want some tips on how to obtain the Duolingo’s score you want and how to prepare well for your exam in the most efficient and effective way possible? You can now sign up in our Duolingo’s preparation course and get yourself acquainted with the exam questions!
        </p>
        <h4>Requirements:</h4>
        <ul>
            <li>Passport, Government ID or Drivers license</li>
            <li>A well lit room plus 60 minutes of uninterrupted time</li>
            <li>Reliable internet connection</li>
            <li>A working computer with a front facing camera, microphone and speaker.</li>
        </ul>
      </div>

      }
      <hr />
      <div className={styles.flexExplore} data-aos="fade-up" onClick={toggleTraining}>
        <p>Fully Funded Employment Training Programme</p>
        <span>
            {isTrainingOpen ? 
            <svg width="21" height="12" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98309 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.002612 8.12876 4.26302e-05 7.82056C-0.00252674 7.51236 0.111138 7.21543 0.316557 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 0 7.49319 0C7.79221 0 8.079 0.123794 8.29047 0.344158L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="white"/>
            </svg>
             : 
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5378 0.458879C20.2417 0.165059 19.8402 1.81659e-08 19.4216 0C19.0029 -1.81659e-08 18.6014 0.165059 18.3054 0.458879L10.4905 8.21692L2.67556 0.458878C2.3778 0.173385 1.979 0.0154114 1.56505 0.0189824C1.1511 0.0225533 0.755126 0.187383 0.462409 0.477969C0.169692 0.768556 0.0036568 1.16165 5.96823e-05 1.57259C-0.00353743 1.98352 0.155594 2.37942 0.443179 2.67501L9.37428 11.5411C9.67034 11.8349 10.0718 12 10.4905 12C10.9091 12 11.3106 11.8349 11.6067 11.5411L20.5378 2.67501C20.8337 2.3811 21 1.98253 21 1.56695C21 1.15136 20.8337 0.752787 20.5378 0.458879Z" fill="white"/>
            </svg>
            }
        </span>
      </div>
      {isTrainingOpen && 
      <div className={styles.displayToggle} data-aos="fade-up">
        <h4>Gain comprehensive training in:</h4>
        <ul>
            <li>Advertising</li>
            <li>Strategic Graphic Design</li>
            <li>Customer Service</li>
        </ul>
        <h4>Requirements:</h4>
        <ul>
            <li>Age limit: 18 years and above</li>
            <li>No prior certificate or experience needed</li>
            <li>Take the Canadian Internship Test to be able to get matched with companies abroad. CIT fee: $70</li>
            <li>Training Duration: 5-8 weeks comprehensive training</li>
        </ul>
      </div>
      }
      <hr />
    </div>
  )
}

export default Explore
