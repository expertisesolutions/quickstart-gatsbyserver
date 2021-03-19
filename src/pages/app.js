import React from "react"
import { Router } from "@reach/router"
import Login from "../layouts/login"
import Home from "../layouts/home"
import Register from "../layouts/register"


const App = () => {
  return (
    <>
      <Router basepath="/app">
        <Home path="/home" />
        <Register path="/register" />
        <Login path="/" />
      </Router>
    </>
  )
}
export default App