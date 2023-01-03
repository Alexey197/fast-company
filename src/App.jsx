import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Users from './app/layouts/users'
import Login from './app/layouts/login'
import Main from './app/layouts/main'
import NavBar from './app/components/ui/navBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={Users}/>
        <Route path="/login/:type?" component={Login}/>
        <Route path="/" exact component={Main}/>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
