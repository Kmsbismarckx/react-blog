import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/Posts" element={<Posts />} />
      <Route exact path="/Posts/:id" element={<PostIdPage />} />
      <Route path="/Error" element={<Error />} />
      <Route path="/*" element={<Navigate to="/Posts" replace />} />
    </Routes>
  );
};

export default AppRouter;
