import './App.css'
import Hello from './components/Hello.jsx'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import StudentCard from './components/StudentCard.jsx'


function App() {
  return (
  <>
  <Navbar/>
    <Hello/>
    <Body/>
    <Footer/>
  </>
  )
}

export default App
