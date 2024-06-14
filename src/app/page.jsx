import HeaderMenu from './components/headerMenu/HeaderMenu';
import HomePage from './components/home/HomePage';
import styles from './page.module.css';

export default async function Home() {
  const data = await getData();
  return (
    <div className='site'>
      <HeaderMenu active='home' />
      <HomePage photos={data} />
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch('https://consulting.lviv.ua/api/aboutpage', {
      next: { revalidate: 10 },
    });
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
