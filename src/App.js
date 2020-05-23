import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <UserProvider>
          <Route path='/' component={MenuBar}/>
          <Route path='/profile' component={Profile}/>
        </UserProvider>
        <Route path='/' exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
