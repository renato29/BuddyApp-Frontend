import React, { useState } from 'react';
import Footer from '../layout/Footer';
import ModalReg from '../layout/ModalReg'
import ModalLogin from '../layout/ModalLogin'
import GetInTouch from '../layout/GetIntouch';
import '../layout/modal.scss';


const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalRegVis, setModalRegVis] = useState(false);

    return (
        <>
            <div className='home-main-container'>
                <div className='container-home'>
                    <div className='form-box w-80' >
                        <div className="card-home text-center bg-transparent ">
                            <div className="card-body-center my-4 ">
                                <h5 className="card-title w-text">Ready to meet your perfect Buddy? </h5>
                                <p className="card-text w-text"> Buddy is a project from a private nonprofit organization whose mission is to build a community where people value animals and treat them with respect and kindness.</p>

                                <button className="btn btn-primary mr-5" onClick={() => setModalRegVis(true)} >Register</button>{modalRegVis ? (<ModalReg onClose={() => setModalRegVis(false)}>
                                </ModalReg>) : null}

                                <button className="btn btn-primary" onClick={() => setIsModalVisible(true)} >Login</button>
                                {isModalVisible ? (<ModalLogin onClose={() => setIsModalVisible(false)}>
                                </ModalLogin>) : null}
                            </div>
                            <div className="w-text card-footer  footerback" style={{ color: "#fffff" }}>
                                Donate now!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer>
            </Footer>

        </>
    )
}

export default Home;
