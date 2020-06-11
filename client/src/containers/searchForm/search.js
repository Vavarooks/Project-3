import React from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import './../../index.css'



function SearchBar(props) {
  return (
      <div className="container">
          <div className="row">
              <div className="col-12">

              <form  >
      <div style={{marginBottom:'40px'}}className="form-group">
         <Input
         focus placeholder='Search...'
          placeholder='Search...'
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
           id="search"
         />
         
         <Button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </Button>
      </div>
    </form>


              </div>
          </div>
      </div>

   
  );
}

export default SearchBar;