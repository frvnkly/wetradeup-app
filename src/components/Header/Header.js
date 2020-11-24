import styles from './Header.module.css';
import logo from '../../assets/logo-black.png';

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={logo} alt='logo' height='48px' />
    </header>
  );
};

export default Header;
