import React from 'react';
import { Route, Switch } from 'react-router';
import Addnotes from './components/Addnotes';
//import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shownotes from './components/Shownotes';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
          <Switch>
              <Route path="/home" component={Home} />
              <Route path="/addnotes" component={Addnotes} />
              <Route path="/notes" component={Shownotes} />
          </Switch>
      </div>
    </div>
  );
};

export default App;
