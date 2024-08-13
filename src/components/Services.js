// pages/Services.js
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Services</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>UI/UX</h2>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>App Design</h2>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Web Design</h2>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Graphic Design</h2>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
