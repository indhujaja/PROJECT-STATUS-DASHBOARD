import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-4'>
        <div className='p-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h3>Team Members</h3>
          </div>
          <hr />
          <div>
            <h4>Total: 2</h4>
          </div>
        </div>
        <div className='p-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h3>Projects Completed</h3>
          </div>
          <hr />
          <div>
            <h4>Total: 3</h4>
          </div>
        </div>
        <div className='p-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Tasks to be completed</h4>
          </div>
          <hr />
          <div>
            <h5>Total:4 </h5>
          </div>
        </div>
      </div>

      <div className='mt-5 px-5 pt-5'>
        <h1>List of Projects</h1>
        <table className='table mt-5'>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Project Status</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PID1</td>
              <td><Link to= "/project1">Website Development</Link></td>
              <td>Completed</td>
              
            </tr>
            <tr>
              <td>PID2</td>
              <td><Link to= "/project2">App Development</Link></td>
              <td>Completed</td>
              
            </tr>
            <tr>
              <td>PID3</td>
              <td><Link to= "/project3">Data Analytics</Link></td>
              <td>Completed</td>
              
            </tr>
            <tr>
              <td>PID4</td>
              <td>Company website creation</td>
              <td>On going</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
