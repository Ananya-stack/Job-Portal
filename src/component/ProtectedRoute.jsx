import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useUserAuth} from './UserAuth'


const ProtectedRoute = props => {
    const {user} = useUserAuth()

    if(!user) {
        return <Redirect to="/signup" />
    }
  return (
    <Route {...props} />
  )
}
export default ProtectedRoute;