import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer';
import '../layout/CSSPages/AdmDash.css'
const axios = require('axios').default;

const AdmDash = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [breed, setBreed] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [color, setColor] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [diet, setDiet] = useState('')
    const [bio, setBio] = useState('')
    const [alergy, setAlergy] = useState('')

    const [buddysList, setBuddysList] = useState([])
   


    useEffect(() => {
        axios.get('http://localhost:5050/api/pets/read').then((response) => {
            setBuddysList(response.data);
        })

    }, [])


    const addToList = () => {
        axios.post('http://localhost:5050/api/pets/insert', 
        { status: status, name: name, breed: breed, height:height, weight: weight, color:color, type: type,diet: diet, alergy: alergy, user_id: user, diet,bio:bio })
    }

    const editPet =()=>{ 
        console.log(('edit pet button works'))
    }
 
    return (
        <>
            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" 
                            src="https://i.imgur.com/0eg0aG0.jpg" 
                            alt="imagem"
                            width={90} /><span className="font-weight-bold"> Profile Photo</span>
                            <span className="text-black-50">Edit Foto: name_of_the_file</span>
                            <span>#####</span>
                            <button className="btn btn-primary profile-button" type="button"> Upload Foto</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
                                    <h6>Back to home</h6>
                                </div>
                                <h6 className="text-right">Clean Form</h6>
                            </div>
                            <select className="custom-select">
                                <option value={type}
                                onChange={(event)=>setType(event.target.value)}
                                >Type of Buddy</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </select>
                            <div className="row mt-2">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Buddy name" onChange={(event) => { setName(event.target.value) }} /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="color" onChange={(event) => { setColor(event.target.value) }}/></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Breed" onChange={(event) => { setBreed(event.target.value) }} /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="weight"onChange={(event) => { setWeight(event.target.value) }}/></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <select className="form-control" 
                                    value={status}
                                    onChange={(event)=>setStatus(event.target.value)}>
                                        <option value="AdoptStatusNone">Adoption Status</option>
                                        <option value="Adopted">Adopted</option>
                                        <option value="Foster">Foster</option>
                                    </select></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Height" onChange={(event) => { setHeight(event.target.value) }} /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Hypoallergenic (yes/no)" onChange={(event) => { setAlergy(event.target.value) }}/></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Dietary restrictions" onChange={(event) => { setDiet(event.target.value) }}/></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1" >Biography:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={bio} onChange={(event) => { setBio(event.target.value) }}></textarea>
                            </div>
                            <div className="mt-5 text-right d-flex justify-content-between">
                                <button className="btn btn-primary profile-button " type="button" onClick={addToList}>Add Buddy</button>

                                <button className="btn btn-primary profile-button" type="button" onClick={editPet}> Edit Buddy</button>
                            </div>

                        </div>
                    </div>
                    <h4 className='p-3 m-4'>Pets List:  </h4>
                    {
                    buddysList.map((item, key) => {
                        return <div key={key} className='buddyCard'> {
                            <>
                                <ul className="list-group list-group-flush buddyList">
                                    {/* <li className="list-group-item">User: {item.user}</li> */}
                                    <li className="list-group-item">Status: {item.status}</li>
                                    <li className="list-group-item">Name: {item.name}</li>
                                    <li className="list-group-item">Breed: {item.breed}</li>
                                    <li className="list-group-item">Color: {item.color} </li>
                                    <li className="list-group-item">H: {item.height}   X W: {item.weight} </li>
                                    <li className="list-group-item">Bio:{item.bio} </li>
                                </ul>
                                    <div className="cardbtn">
                                    <button type="button" className="btn btn-info" onClick={()=>{}}>Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </>
                        }
                        </div>
                    })
                    }
                </div>
            </div>

            <Footer style={{ "background-color": "#239b4c" }}></Footer>
        </>
    )
}

export default AdmDash;