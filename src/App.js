import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// Pages
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import SingleDrink from './pages/SingleDrink'
import Error from './pages/Error'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/drink/:id' component={SingleDrink} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
