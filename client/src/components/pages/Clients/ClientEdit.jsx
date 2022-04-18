import React from 'react'
import { useParams } from 'react-router-dom'

const ClientEdit = () => {
  const { borrowerId } = useParams()

  console.log('clientId is', borrowerId)
  return (
    <div className='overview'>
      <div className="overview-container create">
        <div className="overview-table">
          <div className="title">Edit client details</div>

          <form className='create-client-form' onSubmit={handleSubmit} >

            <input type='text' placeholder='Type new amount' name='amount' value={updatedAmount} onChange={event => setUpdatedAmount(event.target.value)}/>
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
