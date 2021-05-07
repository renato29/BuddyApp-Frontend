import React from 'react'
import {Link } from 'react-router-dom';
import logoFooter from '../IMGS/buddyFooter.png';
import './CSSPages/footer.css';

const Footer = () => {
    return (
        <div className='container-fluid footerback '>
            <div className='row pt-5 footer'  >
                {/* {Column 1 } */}
                <div className='col-sm-3 col-xs-12 d-flex'>
                    <ul className='list-inline mx-auto justify-content-center'>
                    <img src={logoFooter} alt = "logoapp"/>
                    </ul>
                </div>  
                {/* {Column 2 } */}
                <div className='col-sm-3 col-xs-12 d-flex'>
                    <ul className='list-inline mx-auto justify-content-center'>
                        <Link to='/'>
                            <li>Company</li>
                        </Link>
                        <Link to='/'>
                            <li>About</li>
                        </Link>
                        <Link to='/'>
                            <li>Jobs</li>
                        </Link>
                        <Link to='/'>
                            <li>Press</li>
                        </Link>
                    </ul>
                </div> 
                {/* {Column 3} */}
                <div className='col-sm-3 col-xs-12 d-flex'>
                    <ul className='list-inline mx-auto justify-content-center'>
                        <Link to='/'>
                            <li>Community</li>
                        </Link>
                        <Link to='/'>
                            <li>Suport</li>
                        </Link>
                        <Link to='/'>
                            <li>Donate</li>
                        </Link>
                        <Link to='/'>
                            <li>Shelters</li>
                        </Link>
                    </ul>
                </div>
                {/* {Column 4} */}
                <div className='col-sm-3 col-xs-12 d-flex'>
                    <ul className='list-inline mx-auto justify-content-center'>
                        <Link to='/'>
                            <li>Legal</li>
                        </Link>
                        <Link to='/'>
                            <li>Privacy</li>
                        </Link>
                        <Link to='/'>
                            <li>Terms</li>
                        </Link>
                        <Link to='/'>
                            <li>About</li>
                        </Link>
                    </ul>
                </div>    
                    <p className ='pt-3 pb-2 pl-5  mx-auto copy-right'>&copy;&nbsp;Renato Merino {`${new Date().getFullYear()}`}
                    &nbsp; All Rights Reserved</p>           
            </div>             
        </div>
    )
}

export default Footer
