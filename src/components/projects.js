
import React from 'react';
import styles from '../styles/projects.module.css'; // Import the CSS module for styling

const projects = [
  {
    title: 'Web Design',
    description: 'A project showcasing various web design techniques.',
    imageUrl: '/images/web-design.png'
  },
  {
    title: 'App Design',
    description: 'An app design project highlighting UI/UX principles.',
    imageUrl: '/images/app-design.png'
  },
  {
    title: 'Graphic Design',
    description: 'A graphic design project featuring custom artwork.',
    imageUrl: '/images/graphic-design.png'
  },
];

const MyProjects = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.heading}>My Projects</h1>
      <p className={styles.paragraph}>
      Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br/>lectus. Phasellus consequat urna tellus      </p>
     
      <button className={`${styles.button} ${styles.btn1}`}>All</button>
      <button className={`${styles.button} ${styles.btn2}`}>UI/UX</button>
      <button className={`${styles.button} ${styles.btn3}`}>Web Design</button>
      <button className={`${styles.button} ${styles.btn4}`}>App Design</button>
      <button className={`${styles.button} ${styles.btn5}`}>Graphic Design</button>

      <div className={styles.img}>
  <img src='/images/project1.webp' alt='Project 1' />
  <img src='/images/project2.jpeg' alt='Project 2' />
  <img src='/images/images.jpeg' alt='Project 3' />
</div>



    </div>
    </div>
  );
};

export default MyProjects;
