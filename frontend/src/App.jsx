import React from 'react'
import Login from './Login'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EmployeeEdit from './EmployeeEdit'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'
import Hom from './Hom'
import Create from './Create'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element= {<Dashboard />}>
        <Route path= '' element={<Home />}></Route>
        <Route path= '/employee' element={<Employee />}></Route>
        <Route path= '/project1' element={<Project1 />}></Route>
        <Route path= '/project2' element={<Project2 />}></Route>
        <Route path= '/project3' element={<Project3 />}></Route>
        <Route path= '/profile' element={<Profile />}></Route>
        <Route path= '/hom' element={<Hom/>}></Route>
        <Route path= '/creat' element={<Create/>}></Route>
        <Route path= '/create' element={<AddEmployee />}></Route>
        <Route path= '/employeeEdit/:id' element={<EmployeeEdit />}></Route>
      </Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
      <Route path='/employeedetail' element={<EmployeeDetail />}></Route>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
