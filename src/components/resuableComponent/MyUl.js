import React from 'react'

const myUl = (props) => {
  return (
    <div>
      <ul>
        {
            props.list.map((items) => {
                return <li>{items}</li>
            })
        }
      </ul>
    </div>
  )
}

export default myUl
