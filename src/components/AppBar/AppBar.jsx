import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <Container>
        <div className={s.appbar__wrapper}>
          <div className={s.appbar}>
            <Link to="/" className={s.logo}>
              <img src="/svg/logo.svg" alt="logo" />
            </Link>
            <div className={s.nav__wrapper}>
              <Navigation />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
