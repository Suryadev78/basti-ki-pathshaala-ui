import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import './App.css'
import VolunteerForm from './components/Volunteer'

function App() {
  return <>
  <Navbar />
  <section id="home"><Hero /></section>
  <section id="about"><About /></section>
  <section id="volunteer"><VolunteerForm /></section>
</>
}
export default App
