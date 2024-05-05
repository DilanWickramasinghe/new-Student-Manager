import Button from 'react-bootstrap/Button';
import '../Student/student.css'
import { useState } from 'react';

export default function Student () {

    const [student, setStudent] = useState([])
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [address, setAddress] = useState()
    const [school, setSchool] = useState()

    const submit = () => {

        //Passing 
        const newStudent = {
            id : student.length,
            newName : name,
            newAge : age,
            newAddress : address,
            newSchool : school
        }

        setStudent([...student, newStudent])

        console.log(student);
    }

    function deleteStudent (id) {
        const delStudent = student.filter(student => student.id !== id)
        setStudent(delStudent)
    }


    return (
        <>
        <div className="main">

            <div className="input-wrap">

                <h2>Student Manager System</h2>

            <label htmlFor="name">Enter Student Name :</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <label htmlFor="">Enter Student Age :</label>
            <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>

            <label htmlFor="">Student Address :</label>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>

            <label htmlFor="">Student School :</label>
            <input type="text" value={school} onChange={(e)=>{setSchool(e.target.value)}}/>

            <Button onClick={submit} variant="primary"> Submit</Button>{' '}
            
            </div>        
        </div>

        <div className="result">
                <h3>Results</h3>
                <ul className='ul'>
                    {student.map((stud) => (
                        <li key={stud.id}>
                            <p>Name : {stud.newName}</p>
                            <p>Age : {stud.newAge}</p>
                            <p>Address : {stud.newAddress}</p>
                            <p>School : {stud.newSchool}</p>
                            <Button onClick={() => deleteStudent(stud.id)} variant="danger">Delete</Button>{' '}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}