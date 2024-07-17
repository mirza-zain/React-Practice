import React from 'react'

const MyTable = (props) => {
  return (
    <div>
      <table className='table table-bordered'>
        <thead>
            <tr>
                {
                    props.colArry.map((items) => {
                        return <th>{items.header}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                props.dataArry.map((items) => {
                    return <tr>
                        {
                            props.colArry.map((header) => {
                                return <td>{items[header.field]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default MyTable
