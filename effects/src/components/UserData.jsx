import { useContext } from 'react'
import UserContext from './UserContext.jsx'
export default function UserData() {
    const {user,setUser} = useContext(UserContext)
    

    return(
        <>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>City: {user.city}</h1>

        <button onClick={() => setUser({...user ,name:"Name"})}>Change Name</button>
        </>
    )

}