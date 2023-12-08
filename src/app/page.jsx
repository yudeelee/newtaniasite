import HeaderMenu from './components/headerMenu/HeaderMenu';
import HomePage from './components/home/HomePage';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='site'>
      <HeaderMenu active='home' />
      <HomePage />
    </div>
  );
}
