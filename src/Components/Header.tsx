import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logotipo" />
      </div>
    </header>
  );
}
