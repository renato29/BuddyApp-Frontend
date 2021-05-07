import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { signUp } from "../../lib/api";

const FormReg = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState("");
    const [rep_pass, setRep_pass] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = async (event) => {
        const data = await signUp(
            {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNum": phoneNum,
                "email": email,
                "password": password,
            }
        )
        if (data === undefined) {
            window.alert('User already registered')
        } else {
            localStorage.setItem('auth', JSON.stringify(data));
            window.location.assign("/login")
        }

        try {
			setLoading(true);
			setError("");
			const user  = await signUp(data);
			console.log(user);
		} catch (error) {
			 setError("Something wrong...");
		} finally {
			setLoading(false);
		}
    }
    return (
        <>
            <h1 className='pb-4'>Register to be a Buddy</h1>
            <form className='container'>
                <div className='form-row mr-auto' onSubmit={submitHandler} loading={loading} >
                    <Alert error header="Oops!" content={error} > Some Error</Alert>
                    <div className='col-md-6 mb-4'>
                        <input type='text' name="fistname" value={firstName} className='form-control' placeholder='Name' onChange={(event) => setFirstName(event.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-4'>
                        <input type='text' name="lastname" value={lastName} className='form-control' placeholder='Last Name' onChange={(event) => setLastName(event.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-4'>
                        <input type='text' name="phonenum" value={phoneNum} className='form-control' placeholder='Phone' onChange={(event) => setPhoneNum(event.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-4'>
                        <input type='text' name="email" value={email} className='form-control' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-4'>
                        <input type="password" name="password" value={password} className={password === rep_pass ? "form-control " : 'form-control is-invalid'} placeholder='Password' onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-4'>
                        <input type="password" name="rep_pass" value={rep_pass} className={password === rep_pass ? "form-control " : 'form-control is-invalid'} placeholder='Repeat Password' onChange={(event) => setRep_pass(event.target.value)} required />
                    </div>
                    <div className=" col col-lg-9 align-self-center alert d-flex alert-warning alert-dismissible align-top fade show " role="alert">
                        <strong>Password doesn't match.</strong>

                        <button
                            type="button"
                            className="close "
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={submitHandler}>
                        </button>
                    </div>
                </div>
            </form>
            <button
                className='btn btn-primary text-uppercase mt-4'
                onClick={submitHandler}
                disabled={firstName === "" || lastName === '' || email === "" || phoneNum === "" || password !== rep_pass ? true : false}>
                REGISTER</button>
        </>
    )
}

export default FormReg