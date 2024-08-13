import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import About from '../components/About';
import Services from '../components/Services';
import MyProjects from '../components/projects';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Services />
      <MyProjects />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
