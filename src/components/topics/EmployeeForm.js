import React, {useState} from 'react';
import MyUl from '../resuableComponent/MyUl';
import MyTable from '../resuableComponent/MyTable';

function EmployeeForm(props) {
    const [employeeObj, setEmployeeObj] = useState({name: '', mobile: '', email: '', address: ''})
    const [employeeArr, setEmployeeArr] = useState([])

    const changeEmployee = (event, key) => {
        setEmployeeObj(previousObj => ({...previousObj, [key]: event.target.value}))
        console.log(employeeObj)
    }
    const pushEmployee = () => {
        setEmployeeArr(previousArr => [...previousArr, employeeObj])
    }
    const city = ["Karachi", "Islamabad", "Lahore"]
    const colArry = [{header: "Name", field: "name"},
        {header: "Mobile", field: "mobile"},
        {header: "Email", field: "email"},
        {header: "Address", field: "address"}
    ]

  return (
    <div className='container'>
        <h3>{props.pageTitle}</h3>
        {/* <MyUl list = {city} /> */}
        <div className='row'>
            <div className='col-4'>
                <label>Enter Name</label>
                <input type='text' className='form-control' onChange={(e) => {changeEmployee(e, 'name')}} value = {employeeObj.name} />
            </div>
        </div>
        <div className='row'> 
            <div className='col-4'>
                <label>Enter Mobile</label>
                <input type='text' className='form-control' onChange={(e) => {changeEmployee(e, 'mobile')}} value = {employeeObj.mobile}/>
            </div>
            <div className='col-4'>
                <label>Enter Email</label>
                <input type='email' className='form-control'onChange={(e) => {changeEmployee(e, 'email')}} value = {employeeObj.email}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
                <label>Enter Address</label>
                <textarea className='form-control' onChange={(e) => {changeEmployee(e, 'address')}} value = {employeeObj.address}/>
            </div>
        </div>
        <div className='row pt-3'>
            <div className='col-6'>
                <button className='btn btn-success' onClick={() => pushEmployee()} >Save Employee</button>
            </div>
        </div>
        <div className='row pt-3'>
            <div className='col-6'>
                <MyTable colArry = {colArry} dataArry = {employeeArr} />
                {/* <table className='table table-border'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeArr.map((emp, index) => {
                                return (<tr>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </div>
        </div>
    </div>
  )
}

export default EmployeeForm