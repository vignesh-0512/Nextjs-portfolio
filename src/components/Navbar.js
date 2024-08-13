// src/components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Mumair</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/projects">Services</Link>
        </li>
        <li>
          <Link href="/contact">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Testimonials</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.btn}>
          <Link href="/contact">Download CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
