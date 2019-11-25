import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import GreenDay from './components/Greenday'
import Coldplay from './components/Coldplay'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
      </BrowserRouter>
    </>
  )
}

export default App
