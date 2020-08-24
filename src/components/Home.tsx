import React from 'react';
import { Redirect } from 'react-router-dom';

const Home: React.FC = () => {
  return <Redirect to="/posts" />;
};

export default Home;
