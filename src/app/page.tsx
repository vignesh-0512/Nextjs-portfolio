import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed
import Profile from '../components/Profile'; // Ensure correct path and capitalization
import About from '../components/About'; // Ensure correct path and capitalization
import Services from '../components/Services'; // Ensure correct path and capitalization
import MyProjects from '../components/projects'; // Ensure correct path and capitalization
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/subscribe';  
import Footer from '../components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Corrected path

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component should display now */}
      <Profile />
      <About />
      <Services />
      <MyProjects />
      <Testimonials />  
      <Subscribe />
      <Footer />
      {/* <h1>Welcome to My Portfolio</h1>
      <p>This is the main page of my portfolio.</p> */}
    </div>  
  );
};

export default HomePage;
