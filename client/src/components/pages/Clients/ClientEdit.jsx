import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { editClient } from '../../../api/clients'

const ClientEdit = ({ user, msgAlert }) => {
  const { borrowerId } = useParams()
  const [name, setName] = useState('')
  const [industry, setIndustry] = useState('')
  const [creditLimit, setCreditLimit] = useState('')

  console.log('clientId is', borrowerId)
  console.log('user is', user)
  const handleSubmit = async event => {
    event.preventDefault()
    // console.log('updated amount is', updatedAmount)
    try {
      await editClient(borrowerId, user, name, industry, creditLimit)
      msgAlert({
        heading: 'Updated',
        variant: 'success'
      })
    } catch (error) {
    //   console.log(error)
      msgAlert({
        heading: 'Failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }
  console.log('borrowerId is', borrowerId)
  return (
    <div className='overview'>
      <div className="overview-container create">
        <div className="overview-table">
          <div className="title">Edit client details</div>

          <form className='create-client-form' onSubmit={handleSubmit} >

            <input type='text' placeholder='Edit name' name='amount' value={name} onChange={event => setName(event.target.value)}/>
            <input type='text' placeholder='Edit industry' name='amount' value={industry} onChange={event => setIndustry(event.target.value)}/>
            <input type='text' placeholder='Edit credit limit' name='amount' value={creditLimit} onChange={event => setCreditLimit(event.target.value)}/>
            <button className="button" type="submit">Update</button>

          </form>
        </div>
        {/* <div>
          <div>Hello</div>
        </div> */}
      </div>
    </div>
  )
}

export default ClientEdit
