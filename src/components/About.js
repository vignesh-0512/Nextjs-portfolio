import styles from '../styles/About.module.css';
import React from 'react';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src="/images/preview1.png" alt="Muhammad Umair" className={styles.profileImage} />
      </div>
      <div className={styles.content}>
      <h1 className={styles.font}>About Me</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>    

      <div className={styles.range}>
         <p>UX</p>
         <input type='range' value="80"/>
         <p>Website Design</p>
         <input type='range' value="60"/>
         <p>App Design</p>
         <input type='range' value="70" />
         <p>Graphic Design</p>
         <input type='range' value="80" />
      </div>
      </div>
    </div>
  );  
};

export default About;
