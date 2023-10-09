import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Hom() {
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
        <h1>List Of Tasks</h1>
        <br />
        <br />
        <br />
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task Name</th>
                    <th>Assigned to</th>
                    <th>Deadline</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=> (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.deadline}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-primary'>Finished!</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link to ="/creat" className='btn btn-success my-3'>Create + </Link>
      
    </div>
  )
}

export default Hom
