import axios from 'axios';
import React from 'react';
import ServicePage from '../components/services/ServicePage';

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <ServicePage data={data} />
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
