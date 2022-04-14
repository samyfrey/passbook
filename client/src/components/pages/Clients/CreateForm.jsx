import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { createClient } from '../../../api/clients'
import './Client.scss'
import Select from 'react-select'

export const CreateForm = ({ data, handleChange, handleCreate, loan, setLoan, clients }) => {
  const options = clients.map((client) => (
    // [{ value: 'banana', label: 'banana' }]
    { value: `${client._id}`, label: `${client.name}` }

  ))
  console.log('options is', options)
  console.log('clients is', clients)
  const onChange = (selectedBorrower) => {
    setLoan({ ...loan, borrowerId: selectedBorrower.value })
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
          <Select options={options} onChange={onChange} />
          <button className="create-client-btn" type="submit">Create</button>
        </div>

      </form>

    </>

  )
}
