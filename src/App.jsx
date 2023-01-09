import React from 'react'
import Home from './Components/Home'
import View from './Components/View'
import PageNotFound from './Components/PageNotFound'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/view/:id' element={<View/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
