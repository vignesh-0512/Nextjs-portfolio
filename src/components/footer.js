"use client";
import React, { useState } from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (  
    <div className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.heading}>
  <img src="/images/image1.png" alt="Logo" className={styles.logo} />
  <span className={styles.m}>M</span>umair
</h1>
        <p className={styles.links}>
            <a href='#'>Home</a>
            <a href='#'>About Me</a>
            <a href='#'>Services</a>
            <a href='#'>Projects</a>
            <a href='#'>Testimonials</a>
            <a href='#'>Contact</a>
        </p>

        <div className={styles.icons}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>

       <div className={styles.Footer}>
       &copy; 2023 <span className={styles.name}>Mumair</span> All Rights Reserved , Inc.

       </div>
        </div>
      </div>
  );
};

export default Footer;
