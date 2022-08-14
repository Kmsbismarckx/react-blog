import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, []);
    return null;
  }

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.element}
            element={<route.element />}
            path={route.path || '/login'}
            exact={route.exact}
          />
        )}
        <Route
          path='*'
          element={<Redirect to='/posts' />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            key={route.element}
            element={<route.element />}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route
          path='*'
          element={<Redirect to='/login' />}
        />
      </Routes>
  );
};

export default AppRouter;
