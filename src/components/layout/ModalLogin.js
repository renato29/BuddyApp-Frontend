import React from 'react'
import FormLogin from '../pages/FormLogin'
import  './modal.scss';

const ModalLogin = ({ id="modalbox" , onClose=()=>{}}) => {

   const handleOutSideClick=(e)=>{
       if(e.target.id === id)  onClose()
   }
    return (
        
        <div id= {id} className='modal ' 
        onClick={handleOutSideClick}>
            <div className='containerModal text-center mt-4'>
                <button className='close' onClick={onClose}/>
                <div className='content text-center mt-4'><FormLogin/></div>
            </div>
        </div>
    )
}

export default ModalLogin;
