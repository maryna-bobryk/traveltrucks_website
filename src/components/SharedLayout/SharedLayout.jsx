import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const SharedLayout = () => {
  // return (
  //   <div>
  //     <AppBar />
  //     <Outlet />
  //   </div>
  // );
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
