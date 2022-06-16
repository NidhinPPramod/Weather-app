import React from 'react'
import "./SearchBox.css"
import TextField from '@mui/material/TextField';

const SearchBox = () => {
  return (
    <div className=" search-div bg-light text-white rounded p-3">
      <TextField fullWidth id="outlined-basic" label="Enter City" variant="outlined"/>
    </div>
  )
}

export default SearchBox
