import React from 'react'
import FormReg from '../pages/FormReg'
import  './modal.scss';


const ModalReg = ({ id="modalbox" , onClose=()=>{}}) => {

   const handleOutSideClick=(e)=>{
       if(e.target.id === id)  onClose()
   }
    return (

        <div id= {id} className='modal' onClick={handleOutSideClick}>
            <div className='containerModal text-center mt-5'>
                <button className='close' onClick={onClose}/>
                <div className='content text-center mt-3'><FormReg/></div>
            </div>
        </div>
    )   
}
export default ModalReg;

