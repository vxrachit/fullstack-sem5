import './App.css'
import { Routes, Route , Link } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

function Home(){
  return <h1>Home Page</h1>
}
function About(){
  return <h1>About Page</h1>
}
function Contact(){
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Link to="/about">About</Link> 
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      
    </>
  )
}

export default App

