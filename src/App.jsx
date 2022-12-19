import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Users from './app/layouts/users'
import Login from './app/layouts/login'
import Main from './app/layouts/main'
import NavBar from './app/components/navBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Main}/>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
