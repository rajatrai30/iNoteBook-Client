import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const host = "https://inotebook-wine.vercel.app"
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    let navigate  = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        // USE API CALL
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged In Successfully !!!", "success")
            navigate("/")
        }
        else {
            props.showAlert("Invalid Credentials !!!", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (
        <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Login to Continue to iNoteBook</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="email" name='email' value={credentials.email} on onChange={onChange} />
                    <div id="emailHelp" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="password" value={credentials.password} on onChange={onChange} name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login