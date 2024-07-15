import React from 'react'

const Header = () => {
  const displayMessage = "Welcome to React"
  // const displayDate = new Date().toDateString()
  // const isStudentPresent = false
  return (
    <div className='header'>
      <h2>{displayMessage}</h2>
      {/* <p>{displayDate}</p>
      {isStudentPresent && <h3>Student is Present</h3>}
      {!isStudentPresent && <h3>Student is Absent</h3>} */}
    </div>
  )
}

export default Header;
