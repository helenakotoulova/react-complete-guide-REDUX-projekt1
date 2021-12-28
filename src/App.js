import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from './components/UserProfile';

import {useSelector} from 'react-redux';

// podle toho jestli jsme authenticated nebo ne, zobrazime bud auth (prihlasovaci pole - tzn pred authentication), nebo userProfile (auther authentication)
function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

/*
Redux nezna React, propojime je packagem react-redux.
npm install redux react-redux
*/
