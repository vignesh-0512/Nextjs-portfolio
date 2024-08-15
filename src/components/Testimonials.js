"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonials.module.css';

// Dummy data for testimonials
const testimonials = [
  {
    image: '/images/download.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.',
    name: 'John Doe',
    position: 'CEO, Company'
  },
  {
    image: '/images/download.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.',
    name: 'Jane Smith',
    position: 'CTO, Company'
  },
  {
    image: '/images/download.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.',
    name: 'Michael Johnson',
    position: 'Developer, Company'
  },
  {
    image: '/images/download.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.',
    name: 'Emily Davis',
    position: 'Designer, Company'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Testimonials</h1>
        <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br/>lectus. Phasellus consequat urna tellus   
           </p>
      
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={testimonial.image} alt={`${testimonial.name}'s photo`} />
                </div>
                <div className={styles.text}>
                  <p className={styles.paragraph}>{testimonial.text}</p>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.position}>{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
