import './index.css';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";
import { getAuth } from './redux/selectors/authSelectors';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector(getAuth);
  const { isAuth } = auth;
  return (
    <Fragment>
      <Header isAuthenticated={isAuth} />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default App;
