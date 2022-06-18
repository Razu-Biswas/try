import React, { useState } from 'react';
import "./Students.css"

const Students = (props) => {
    const [marks, setMarks] = useState(5)
    const handleMarksIncrease = () => setMarks(marks + 1)
    const handleMarksDecrease = () => setMarks(marks - 1)
    const { email, first_name, last_name, gender, id, image } = props.students;
    return (
        <div className='students bg-success'>
            <img className='image2' src={image} alt="" />
            <p className='text-light'>Name: {first_name}   {last_name}</p>
            <p className='text-danger'>Roll: {id}</p>
            <p className='text-warning'>Gender:{gender}</p>
            <p className='text-warning'>Email: {email}</p>
            <div>
                <h6>Obtained Marks: {marks}/30</h6>
                <button className='rounded' onClick={handleMarksDecrease}>Decrease</button>
                <button className='rounded m-2' onClick={handleMarksIncrease}>Increase</button>
            </div>

        </div>
    );
};

export default Students;