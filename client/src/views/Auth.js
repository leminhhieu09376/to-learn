import React from 'react'
import LoginForm from '../component/auth/LoginForm'
import RegisterForm from '../component/auth/RegisterForm'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from "react-router-dom";
const Auth = ({ authRoute }) => {
    let navigate = useNavigate();

    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    let body
    if (authLoading) {
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (isAuthenticated) return navigate('/dashboard')
    else
        body = (
            <>

                {authRoute === 'login' && <LoginForm />}
                {authRoute === 'register' && <RegisterForm />}
            </>

        )
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>Learn it</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth