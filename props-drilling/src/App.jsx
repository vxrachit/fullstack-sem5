import './App.css'
import UserData from './components/UserData.jsx'
import UserContext from './components/UserContext.jsx'
import { useState } from 'react'
function App() {
  const [user , setUser] = useState({
        name: "Meow",
        age: 0,
        city: "Mathura"
    });
  return (
  <>
  <UserContext.Provider value={{user , setUser}}>
    <UserData/>
  </UserContext.Provider>
  </>
  )
}

export default App
