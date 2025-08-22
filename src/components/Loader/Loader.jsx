import { CircleLoader } from 'react-spinners';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <CircleLoader
        color="#e44848"
        loading
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
