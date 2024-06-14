import React from 'react';
import ServicePage from '../components/services/ServicePage';
import HeaderMenu from '../components/headerMenu/HeaderMenu';
import Footer from '../components/footer/Footer';

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <HeaderMenu active='services' />
      <ServicePage data={data} />
      <Footer />
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch('https://consulting.lviv.ua/api/servicepage');
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    const posts = res.json();
    console.log('qqqq');
    return posts;
  } catch (error) {
    return error;
  }
}
