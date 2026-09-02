export default function StudentCard(props){
    // const name = "Rachit";
    // const course = "B.Tech (hons) 3rd Year";
    // const rollNo = "2021BCS-001";
    console.log(props);

    return(
        <>
        <p>Name: {props.name}</p>
        <p>Course: {props.course}</p>
        <p>Roll No: {props.rollNo}</p>
        </>
    )


}