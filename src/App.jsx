import React from 'react'
import Home from './Pages/Home'
import View from './Pages/View'
import PageNotFound from './Pages/PageNotFound'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="vitereact" element={<Home />} />
          <Route path='/view/:id' element={<View/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
