import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'




function EmployeeDetail() {
  const userName = 'Olivia Benson'; 
  const navigate = useNavigate()
  const userDetails = {
    age: 19,
    location: 'Chennai',
    email: 'abc@gmail.com',
    dept: 'Backend Developer',
    doj: '2-10-2023'
    // Add more details as needed
  };
  const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
  return (
    <div>
      <div className="p-1 px-5 d-flex shadow">
        <h1>Welcome, {userName}</h1>
      </div>
      <div className="text-center mt-4">
        <img src="src/Images/managers.jpg" alt="" className='managerImage m-5' />
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <table className="table table-bordered w-50">
          <tbody>
            <tr>
              <th className="font-size-lg">Name:</th>
              <td className="font-size-lg">{userName}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Age:</th>
              <td className="font-size-lg">{userDetails.age}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Location:</th>
              <td className="font-size-lg">{userDetails.location}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Email:</th>
              <td className="font-size-lg">{userDetails.email}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Department:</th>
              <td className="font-size-lg">{userDetails.dept}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Date of Joining</th>
              <td className="font-size-lg">{userDetails.doj}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <Link to ="/hom" className="btn btn-primary mx-2">Tasks</Link>
        <button className="btn btn-danger mx-2" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default EmployeeDetail;
