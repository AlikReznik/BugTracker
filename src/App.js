import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Main from './Pages/Main'
import Apps from './Pages/Apps'
import Bugs from './Pages/Bugs'
import AddABug from './Pages/AddABug'
import PageNotFound from './Pages/PageNotFound'
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/apps" element={ <Apps /> } />
          <Route path="/bugs" element={ <Bugs /> } />
          <Route path="/bugs/add" element={ <AddABug /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </Router>
  )
}

export default App