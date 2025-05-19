import { useState } from 'react';
import styles from './Register.module.css'
import emailjs from 'emailjs-com';

const Register = () => {

const [buttonText, setButtonText] = useState('Register');
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] =  useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText('Loading...');

    emailjs.sendForm(
      'service_s9hnq3v',      // service ID
      'template_o7gz77w',     // template ID
      e.target,
      'TYYEHT4xIRHttQGDD'
    )
    .then((result) => {
        setSuccessMessage('We Have Successfully Received Your Registration!');
        setButtonText('Submitted');
        setIsSubmitting(false);
        console.log(result.text);
        e.target.reset();

        setTimeout(() => {
        setButtonText('Register');
        }, 5000);
    }, (error) => {
        setSuccessMessage('❌ Failed. Please try again.');
        console.error(error.text);
    });
  };

  return (
    <div className={styles.registerContainer}>
        {successMessage && 
        (
            <h3>{successMessage}</h3>) }

      <h2>Medical Exams Prep (NCLEX Exam)</h2>
      <div>
        <form onSubmit={sendEmail}>
            <div className={styles.formBlock}>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="email_address">Email Address:</label>
                <input type="email" id="email_address" name="email_address" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="phone_number">Phone Number:</label>
                <input type="number" id="phone_number" name="phone_number" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="course">Course of Study:</label>
                <input type="text" id="course" name="course" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="level">Level:</label>
                <select id="level" name="level" required>
                <option value="">Select Level</option>
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
                <option value="500 Level">500 Level</option>
                <option value="600 Level">600 Level</option>
                </select>
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="institution">Name of Institution:</label>
                <input type="text" id="institution" name="institution" required />
            </div>
            <div className={styles.formBlock}>
                <label htmlFor="profession">Professional Status:</label>
                <select id="profession" name="profession" required>
                <option value="">Select</option>
                <option value="Student Nurse">Student Nurse</option>
                <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                </select>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting}>
                    {buttonText}
                </button>
            </div>
        </form>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Register
