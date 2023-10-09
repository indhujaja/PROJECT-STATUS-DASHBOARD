import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Start() {
    const navigate = useNavigate()
  return (
    <div className="Buttonpage">
      <div className="left-half">
        <button className="btn btn-primary px-5 py-3" onClick={e => navigate('/login')}><h3>Manager</h3></button>
      </div>
      <div className="right-half">
        <button className="btn btn-primary py-3 px-5" onClick={e => navigate('/employeeLogin')}><h3>Employee</h3></button>
      </div>
    </div>
  );
}

export default Start;

