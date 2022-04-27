import React from 'react'

import './client.scss'

export const ClientCreateForm = ({ data, handleChange, handleCreate }) => {
  return (
    <>

      <h1>New client</h1>

      <form onSubmit={handleCreate}>
        <div className="create-client-item">
          {data.map(dataPoint => (
            <div key={dataPoint.id}>
              <input type='text' placeholder={dataPoint.placeholder} name={dataPoint.property} value={dataPoint.value} onChange={handleChange}/>

            </div>

          ))}

          <button className="button" type="submit">Create</button>

        </div>

      </form>

    </>

  )
}
