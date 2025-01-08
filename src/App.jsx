import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from './Pages/HomePage'
import PackageDetails from './Pages/PackageDetail'
import Appointment from './Pages/Appointment'
import Contact from './Pages/Contact'
import Package from './Pages/AllPackageList'
import About from './Pages/About'
function App() {

  return (
    <Router>

        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/packages" element={<Package/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/packages/:id" element={<PackageDetails/>} />
        </Routes>

    </Router>
  )
}

export default App
