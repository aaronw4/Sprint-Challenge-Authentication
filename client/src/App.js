import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {SignUp} from './components/signUp';
import {SignIn} from './components/signIn';
import jokes from './components/jokes';
import {PrivateRoute} from './components/privateRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={SignUp}/>
        <Route path='/signIn' component={SignIn}/>
        <PrivateRoute exact path='/jokes' component={jokes}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
