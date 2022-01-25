import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const initialState = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(credentials);
        axios.post('http://localhost:9000/api/login', credentials)
            .then(resp => {
                console.log('resp', resp)
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('role', resp.data.role);
                localStorage.setItem('username', resp.data.username);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <label>Username:
                <input 
                    type='text'
                    name='username'
                    value={credentials.username} 
                    onChange={handleChange}
                    placeholder='Username'
                />
                </label>
                <label>Password:
                <input
                    type='password'
                    name='password'
                    value={credentials.password} 
                    onChange={handleChange}
                    placeholder='Password'
                />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;