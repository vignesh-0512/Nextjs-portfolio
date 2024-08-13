import styles from '../styles/profile.module.css';
import React from 'react';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.greeting}>Hi I am</h1>
        <h1 className={styles.name}>Muhammad Umair</h1>

        <h2 className={styles.role}>
  UI & UX <span className={styles.test}>Designer</span>
</h2>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <button className={styles.hireMeButton}>Hire Me</button>
      </div>
      <div className={styles.imageContainer}>
      <img src="/images/image.png" alt="Muhammad Umair" className={styles.profileImage} />
      </div>
      <div className={styles.socialLinks}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );  
};

export default Profile;
