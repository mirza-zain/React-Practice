import React, { useState } from 'react'

function Sttate() {
    const [languageName, setLanguageName] = useState('ReactJs');
    const [studObj, setStudObj] = useState({name: 'Mirza', city: 'Karachi'})
    const [cityObj, setCityObj] = useState(["Karachi", "Lahore", "Islamabad"])

    const changeLanguage = () => {
        setLanguageName('Angular')
    }
    const changeStudent = () => {
        setStudObj(setName => ({...setName, name: 'Zain'}))
    }
    const changeCity = () => {
        setStudObj(setCity => ({...setCity, city: 'Islamabad'}))
    }
    const city = () => {
        // alert(`Cities are following ${cityObj}`)
        setCityObj(change => ([...change,["change"]]))
    }

  return (
    <div className='row'>
        <div className='col-3'>
            <p>{languageName}</p>
        </div>
        <div className='col-2'>
            <button className='btn btn-sm btn-primary' onClick={changeLanguage}>Change Language</button>
        </div>
        <div className='col-6'>
            <p>{studObj.name}, {studObj.city}</p>
            <button className='btn btn-sm btn-primary' onClick={changeStudent}>Change Name</button>
            <button className='btn btn-sm btn-primary' onClick={changeCity}>Change City</button>

        </div>
        <div className='col-3'>
            <p>{cityObj}</p>
            <button className='btn btn-primary btn-sm' onClick={city}>Show City</button>
        </div>
    </div>
  )
}

export default Sttate