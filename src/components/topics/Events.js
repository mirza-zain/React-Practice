import React from 'react'

export default function Events() {
    const showAlert = () => {
        alert('Welcome to React Learning Series!')
    }
    const changeState = () => {
        alert('Country Changed')
    }
    const selectedValue = (val) => {
        alert(`Selected Country is ${val}`)
    }
    const changeInput = (val) => {
        console.log(val)
    }

  return (
    <div>
      <div className='row'>
        <div className='col-3'>
            <button className='btn btn-sm btn-primary' onClick={showAlert}>Show Alert</button>
        </div>
        <div className='col-3'>
            <button className='btn btn-sm btn-primary' onClick={() => showAlert()}>Show Alert</button>
        </div>
    </div>
    <div className='row'>
            <div className='col-3'>
                <select className='form-control' onChange={changeState}>  
                    <option value= "USA">USA</option>
                    <option value= "Pak">Pak</option>
                    <option value= "Japan">Japan</option>
                </select>
            </div>
            <div className='col-3'>
                <select className='form-control' onChange={(e) => selectedValue(e.target.value)}>  
                    <option value= "USA">USA</option>
                    <option value= "Pak">Pak</option>
                    <option value= "Japan">Japan</option>
                </select>
            </div>
        </div>
    <div className='row'>
            <div className='col-3'>
                <input type='text' className='from-control' onChange={(e) => changeInput(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}
