import React from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Home from '../component/Home'
import Job from '../component/Job'
// import Login from '../component/Login'
// import ProtectedRoute from '../component/ProtectedRoute'
import View from '../component/View'
import Header from '../header/Header'
// import { UserAuthProvider } from '../component/UserAuth'
// import SignUp from '../component/SignUp'

export default function Routing() {
  return (
    <div>
       {/* <UserAuthProvider/> */}
      <Router>
            <Header/>
            <Switch>
            <Route path="/" exact component={Home} />
        <Route path="/view" exact component={View} />
        <Route path="/job" exact component={Job} />
        {/* <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} /> */}
    
      </Switch>
      </Router>
    </div>
  )
}
