import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { createClient } from '../../../api/clients'
import './Client.scss'
import Select from 'react-select'

export const CreateForm = ({ data, handleChange, handleCreate, loan, setLoan, clients }) => {
  const idOptions = clients.map((client) => (
    // [{ value: 'banana', label: 'banana' }]
    { value: `${client._id}`, label: `${client.name}` }

  ))
  const monthOptions = [

    { value: 'Jan', label: 'January' },
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'June' },
    { value: 'Jul', label: 'July' },
    { value: 'Aug', label: 'August' },
    { value: 'Sep', label: 'September' },
    { value: 'Oct', label: 'October' },
    { value: 'Nov', label: 'November' },
    { value: 'Dec', label: 'December' }

  ]

  console.log('options is', idOptions)
  console.log('clients is', clients)
  const handleBorrowerId = (selectedBorrower) => {
    setLoan({ ...loan, borrowerId: selectedBorrower.value })
  }
  const handleMonth = (selectedBorrower) => {
    setLoan({ ...loan, month: selectedBorrower.value })
  }

  return (
    <>
      <form className='create-client-form' onSubmit={handleCreate}>
        <div className="create-client-item">
          {/* <label>Company Name</label> */}
          {data.map(dataPoint => (
            <div key={dataPoint.id}>
              <input type='text' placeholder={dataPoint.placeholder} name={dataPoint.property} value={dataPoint.value} onChange={handleChange}/>

            </div>

          ))}
          <Select placeholder='Select Borrower'options={idOptions} onChange={handleBorrowerId} />
          <Select placeholder='Select Closing Month'options={monthOptions} onChange={handleMonth} />
          <button className="create-client-btn" type="submit">Create</button>
        </div>

      </form>

    </>

  )
}
