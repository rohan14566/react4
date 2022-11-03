import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Students from './Pages/Students'
import Contact from './Pages/Contact'
// import DarkExample from './Components/Table'
import CollapsibleExample from './Components/Appbar';

export default function App() {
  return (

<BrowserRouter>
<CollapsibleExample/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/Students' element={<Students/>}/>
<Route path='/Contact' element={<Contact/>}/>


</Routes>
</BrowserRouter>
  
  )
}

