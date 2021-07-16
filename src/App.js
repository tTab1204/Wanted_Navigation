import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route exact path='/' component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
