import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true) // initially loading hogi hi hogi
  const [error, setError] = useState("") // initially koi error nhi h

  useEffect(() => {
    async function getUsers(){
    console.log("useEffect Initiated")
    try{
       {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setUsers(data)

    }
    }
    catch (error) {
      console.log("Error: ",error)
      setError(error.message) // agar error aata h to usko set kar do
    }
    finally{
      setLoading(false) // loading ko false kar do
    }
  }
    getUsers()
  },[]) // dependency array is empty, so this effect will only run once when the component mounts
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error}</h1>

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p> // to identidy every element in the list, we need to provide a unique key prop.
      ))}
      
    </>
  )
}

export default App

