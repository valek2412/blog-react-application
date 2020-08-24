import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import PostScreen from './components/PostScreen';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts">
        <PostList />
      </Route>
      <Route exact path="/posts/:id">
        <PostScreen />
      </Route>
    </Switch>
  );
};

export default App;
