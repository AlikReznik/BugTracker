import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { Container } from 'react-bootstrap'

import NavBar from './Components/NavBar'

import Main from './Pages/Main'
import Apps from './Pages/Apps'
import Bugs from './Pages/Bugs'
import AddABug from './Pages/AddABug'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  return (
      <Container>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/apps" element={ <Apps /> } />
            <Route path="/bugs" element={ <Bugs /> } />
            <Route path="/bugs/add" element={ <AddABug /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
        </Router>
      </Container>
  )
}

export default App