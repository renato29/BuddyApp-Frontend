import React from 'react'
import { Link } from 'react-router-dom';
import './CSSPages/searchAdv.css'

function ShowPets({pets}) {

  const searchAdv = (buddyAr=[]) => {

    return buddyAr.map(pet =>({
      header: pet.Name,
      image: pet.Picture,
      meta: pet.AdoptionStatus,
      color: 'teal',
      fluid: true,
      href: `/pet?_id=${pet._id}`
    }))
  }

  if (!pets || pets.length === 0) {
    return 'loading...'
  }
  
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <div className=" p-3 py-4">
            
              <div className="row g-3 mt-2">
                <div className="col-md-3">
                  <div className="dropdown"> <button className="btn btn-secondary-s dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> Options </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><Link className="dropdown-item" to="#">Adopted</Link></li>
                      <li><Link className="dropdown-item" to="#">Foster</Link></li>
                      <li><Link className="dropdown-item" to="#">Owners</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control-s" placeholder="Search Name, Breed " /> </div>
                <div className="col-md-3">
                  <button className="btn btn-secondary-s btn-block">Search Results</button> </div>
              </div>

              <div className="mt-3">
                  <div className=" card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <input type="text" placeholder="Height" className="form-control-s" /> </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control-s" placeholder="Weight " /> </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control-s" placeholder="Type" /> </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   {/* <Link itemsPerRow="3" centered  items={searchAdv(pets)} /> */}
     </>
  )
}

export default ShowPets;