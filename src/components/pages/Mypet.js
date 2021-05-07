import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer'
import SearchBar from '../layout/SearchBar'
import { Button } from 'react-bootstrap';


const Mypet = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='container'>
                    <div className='form-box p-auto'>
                    <h1 className="display-5 text-uppercase py-1 text-center Title ">MY PET</h1>
                        <div className='container '>
                            <h4 className="p-4" >
                                (If)"User", you currently do not own or foster any pets. don't render Pets component</h4>
                            <SearchBar className="mx-4 my-4" />
                            <h4 className="p-4"> Your Pets: get in DB all pets related to user(logedin) </h4>
                        </div>
                        <Link to='#'>
                            <Button type="button" className="btn btn-primary btn-lg btn-block mx-3 my-3">
                                Owner Button Return Pet (delete)
                                </Button>
                        </Link>
                        <Link to='#'>
                            <Button
                                type="button"
                                className="btn btn-primary btn-lg btn-block mx-3 my-3">
                                Guest Adopt Return (create)
                            </Button>
                        </Link>
                        <Link to='#'>
                            <Button
                                type="button"
                                className="btn btn-primar(y btn-lg btn-block mx-3 my-3">Save/UnSave Button (edit)
                            </Button>
                        </Link>

                        <div className="p-4 pet-list">
                                <h3> List of my Pets</h3>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Mypet;