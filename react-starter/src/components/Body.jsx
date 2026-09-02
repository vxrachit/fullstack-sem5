import StudentCard from './StudentCard.jsx'
const student = [
  {name: "John", course: "BTech", rollNo: "67890"},
  {name: "Jane", course: "BTech", rollNo: "54321"},
  {name: "Bob", course: "BTech", rollNo: "98765"}
]
function Body(){
    
    
    return (
        <>
    {student.map((student) => (
        <StudentCard name = {student.name} course = {student.course} rollNo = {student.rollNo}/>
    ))}
            </>
    )
}
export default Body