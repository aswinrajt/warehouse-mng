import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
