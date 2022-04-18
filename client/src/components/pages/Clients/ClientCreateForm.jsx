import React from 'react'

import './Client.scss'

export const ClientCreateForm = ({ data, handleChange, handleCreate }) => {
  return (
    <>
      <div className='overview'>
        <div className="overview-container create">
          <div className="overview-table">
            <div className="title">Add a new client</div>

            <form className='create-client-form' onSubmit={handleCreate}>
              <div className="create-client-item">
                {/* <label>Company Name</label> */}
                {data.map(dataPoint => (
                  <div key={dataPoint.id}>
                    <input type='text' placeholder={dataPoint.placeholder} name={dataPoint.property} value={dataPoint.value} onChange={handleChange}/>

                  </div>

                ))}

                <button className="button" type="submit">Create</button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </>

  )
}
