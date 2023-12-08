import React from 'react';
import ServicePage from '../components/services/ServicePage';
import HeaderMenu from '../components/headerMenu/HeaderMenu';
import Footer from '../components/footer/Footer';

const page = () => {
  return (
    <div>
      <HeaderMenu active='services' />
      <ServicePage />
      <Footer />
    </div>
  );
};

export default page;
