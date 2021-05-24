import React, { useState, useEffect } from 'react'
import useUser from './../hooks/useUser';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();
    const {login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) history.push('/')
    }, [isLogged, history])

    const handleSubmit = (e) => {
        e.preventDefault();
        login( username, password )
    }
    return (
        <form className='form' onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField 
                className='inputLogin'
                id="username" 
                label="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField 
                className='inputLogin'
                id="password" 
                label="password" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button 
                variant="outlined" 
                color="primary"
                className="mt-3"
                type="submit"
            >
                login
            </Button>
        </form>
    )
}

export default Login