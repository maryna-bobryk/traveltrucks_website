import s from './HomePage.module.css';
import Container from '../../components/Container/Container.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={s.hero}>
          <h1 className={s.hero__title}>Campers of your dreams</h1>
          <p className={s.hero__text}>
            You can find everything you want in our catalog
          </p>
          <Link to="/catalog" className={s.hero__btn}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
