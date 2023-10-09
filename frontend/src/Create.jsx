import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [deadline, setDeadline] = useState('')
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email,deadline}))
        navigate('/hom')
    }

  return (
    <div className='d-flex w-200 vh-100 p-5  justify-centent-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add new Task</h3>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Task Name :</label>
            <input type="text" name = "name" className='form-control' placeholder='Enter name of Task'
            onChange={e => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Assigned to :</label>
            <input type="text" name = "email" className='form-control' placeholder='Enter name of team member'
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="text">Deadline :</label>
            <input type="text" name = "text" className='form-control' placeholder='Enter deadline'
            onChange={e => setDeadline(e.target.value)}/>
        </div> <br />
        <button className='btn btn-info'>Submit</button>
      </form>
    </div>
    </div>
      
  )
}

export default Create
