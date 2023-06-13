import React, { useState, useContext } from 'react'
import { AuthContext } from '../Contexts/auth'
import "../Style/LoginStyle.css"

const states = {
    email: "",
    password: ""
}
function Login() {
    const [state, setState] = useState(states)
    const { login } = useContext(AuthContext)

    const onChange = ({ target }) => {
        const { name, value } = target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(state.email, state.password)
    }
    return (
        <>
            <div className='box'>
                <h2>Login</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='inputBox'>
                        <input
                            type='text'
                            autoComplete='off'
                            autoFocus=''
                            name="email"
                            spellcheck="false"
                            value={state.email}
                            onChange={onChange}
                            required></input>
                        <label for="">Email</label>
                    </div>
                    <div className='inputBox'>
                        <input
                            type='password'
                            autoComplete='off'
                            autoFocus=''
                            name="password"
                            value={state.password}
                            onChange={onChange}
                            required></input>
                        <label for="">Senha</label>
                    </div>
                    <input type='submit' value='Entrar'></input>
                    <div className='register-link'>
                        <p>Don't have an accout? <a href='#'>Register</a></p>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Login;
