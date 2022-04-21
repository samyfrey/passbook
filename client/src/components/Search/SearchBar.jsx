import React, { useState } from 'react'
import './searchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'

function SearchBar ({ placeholder, data, render }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    console.log('data is', data)
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onClick={render}
        />
        <div className="searchIcon">
          {filteredData.length === 0
            ? (
              <SearchIcon />
            )
            : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <>

                <Link to={`/clients/${value._id}`} target="_blank" rel="noopener noreferrer" onClick={clearInput}>
                  <p>{value.name} </p>
                </Link>
                {/* { clearInput()
                } */}
                {/* </a> */}
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
