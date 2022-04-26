import React from 'react'

import './Client.scss'

export const ClientCreateForm = ({ data, handleChange, handleCreate }) => {
  return (
    <>
      {/* <div className='overview'> */}
      {/* <div className="app-container"> */}
      {/* <div className="container-box"> */}
      <h1>New client</h1>

      <form onSubmit={handleCreate}>
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
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>

  )
}
