import React from 'react'
import Select from 'react-select'
import './loan.scss'
export const LoanCreateForm = ({ data, handleChange, handleCreate, loan, setLoan, clients }) => {
  const idOptions = clients.map((client) => (
    // [{ value: 'banana', label: 'banana' }]
    { value: `${client._id}`, label: `${client.name}` }

  ))

  const statusOptions = [
    { value: 'Approved', label: 'Approved' },
    { value: 'Pending', label: 'Pending' }
  ]

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
  const handleStatus = (selectedBorrower) => {
    setLoan({ ...loan, status: selectedBorrower.value })
  }

  return (
    <>
      <form onSubmit={handleCreate}>
        <div className="create-client-item">
          <Select placeholder='Select Borrower'options={idOptions} onChange={handleBorrowerId} />
          {data.map(dataPoint => (
            <div key={dataPoint.id}>
              <input type='text' placeholder={dataPoint.placeholder} name={dataPoint.property} value={dataPoint.value} onChange={handleChange}/>

            </div>

          ))}

          <Select placeholder='Approval Status'options={statusOptions} onChange={handleStatus} />
          <Select placeholder='Closing Month'options={monthOptions} onChange={handleMonth} />

          <button className="button" type="submit">Create</button>

        </div>

      </form>

    </>

  )
}
