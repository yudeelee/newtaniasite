import React from 'react';
import AboutPage from '../components/about/aboutPage';
import HeaderMenu from '../components/headerMenu/HeaderMenu';
import Footer from '../components/footer/Footer';

const page = () => {
  return (
    <div>
      <HeaderMenu active='about' />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default page;
