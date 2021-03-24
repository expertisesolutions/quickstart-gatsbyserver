import React from "react"
import { navigate } from "gatsby"
//import { isAuthenticated } from "../../auth/auth"
const isAuthenticated = true //temporario


//
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated) {
    navigate("/login/")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute