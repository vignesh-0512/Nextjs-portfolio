"use client";
import React, { useState } from 'react';
import styles from '../styles/subscribe.module.css';

const Subscribe = () => {
  // Define state for the email input
  const [email, setEmail] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // You can handle the form submission here
    alert(`Submitted email: ${email}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Let's Design Together</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className={styles.form}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button onClick={handleSubmit} className={styles.button}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
