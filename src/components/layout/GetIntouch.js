import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div className='container-fluid  '>
                <div className="row">
                    <div className="col-md-4 mt-5 ml-4 h-100 d-inline-block"><h1>Get In Touch</h1></div>
                    <div className="col-xs-6 col-sm-4  m-4 text-center">
                        <h2>
                            Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia, 
                            we are One.</h2>

                        <form className="form-inline">
                            <div className="form-group">
                                <label className="sr-only">First Name</label>
                                <label className="sr-only">Last Name</label>
                                <label className="sr-only">Email</label>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label  className="sr-only float-left "></label>
                                    <input type="" className="form-control"  placeholder="Name" />
                                </div>
                                <div>
                                    <label  className="sr-only mx-auto "></label>
                                    <input type="" className="form-control" placeholder="Last Name" />
                                </div>
                                <div>
                                    <label className="sr-only"></label>
                                    <input type="" className="form-control"  placeholder="Email" />
                                </div>
                            </div>
                            <label className="sr-only mx-auto"></label>
                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>

                            <button type="submit" className="btn btn-default p-3 mb-2 bg-success text-white">Confirm identity</button>

                        </form>
                    </div>
                    <div className="col-md-4">col3</div>
                </div>
            </div>



        </>

    )
}

export default GetInTouch;