import './App.css'
import Header from './components/Pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Pages/Footer.jsx'

function App() {


  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default App
