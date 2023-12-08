import React from 'react';
import HeaderMenu from '../components/headerMenu/HeaderMenu';
import Footer from '../components/footer/Footer';
import ContactPage from '../components/contact/ContactPage';

const page = () => {
  return (
    <div>
      <HeaderMenu active='contact' />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
