import React from 'react';
import { useState, useEffect } from 'react';
import Students from '../Students/Students';
import "./Student.css"

const Student = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Razu-Biswas/fakeJson/main/data2.json")
            .then(res => res.json())
            .then(data => {
                const studentsData = data.slice(80, 100)
                setStudents(studentsData)
            })
    }, [])
    // console.log(students)
    return (
        <div className='students-details'>
            <h3>Total Student:  {students.length}</h3>
            {
                students.map(std => <Students students={std} ></Students>)
            }
        </div>
    );
};

export default Student;