import React from 'react'
import 'react-bootstrap'


const SearchBar = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" 
      className="form-control" 
      placeholder="Search Adoption Status, Height, Weight, Type, Name" 
      aria-label="" 
      aria-describedby="button-addon2" />
      
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
    </div>)
}

export default SearchBar;