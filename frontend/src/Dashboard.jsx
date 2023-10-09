import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'


function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}

  return (
    <div className="container-fluid ">
        
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-1 fw-bolder d-none d-sm-inline" style={{ textShadow: '0px 2px 4px white' }}>
  TaskTrace
</span>
                </a>
                

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-white align-items-sm-start" id="menu">
                    
                    <li className="nav-item">
                        <Link to = "/" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Your profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="profile" className="nav-link px-0 align-middle text-white ">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"> Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to="/employee" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-person-add"></i> <span className="ms-1 d-none d-sm-inline">Manage Teammates</span> </Link>
                    </li>
                   
                    <li>
                        <Link to="/hom" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-newspaper"></i> <span className="ms-1 d-none d-sm-inline">Current Project</span></Link>
                    </li>
                    
                    <li onClick={handleLogout}>
                        <a href="#" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span> </a>
                    </li>
                </ul>
                
            </div> 
        </div>
        <div className="col p-0 m-0">
            
        <Outlet /> 
        </div>
    </div>
</div>
  )
}

export default Dashboard
