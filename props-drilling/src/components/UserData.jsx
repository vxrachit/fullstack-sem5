import { useState } from 'react'
export default function UserData() {
    const [data, setData] = useState({
        name: "Name",
        age: 0,
        city: "Mathura"
    });

    function updateName(){
        setData({
            ...data, //deconstruction of data object
            name: "Name Changed"

        }
            
        )
    }

    return(
        <>
            <h1>Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
            <h1>City: {data.city}</h1>
            <button onClick={updateName}>Update Name</button>
        </>
    )

}