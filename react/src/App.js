import './App.css';
import React from 'react';
import Stage1 from './components/register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  localStorage.setItem('url', 'http://localhost:3001')
  return (
    <div className='App container'>
      <Router>
        <Switch>
          <Route path='/stage1'>
            <Stage1 />
          </Route>
          <Route path='/'>
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  )

}

export default App;
