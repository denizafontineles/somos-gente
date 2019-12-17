import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home';
import Nav from './components/Nav'
import Projectpage from './pages/Projectspage'
// import Login from './pages/Login'


const App = () => {
  return (
    <Switch>
      <>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/projetos' component={Projectpage} />
        {/* <Route path='/entrar' component={Login} /> */}
      </>
    </Switch>
  )
}

export default App;
