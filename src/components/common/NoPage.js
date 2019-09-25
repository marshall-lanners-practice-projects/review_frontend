import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>404 nothing here</h1>
    </>
  );
};

export default NoPage;
