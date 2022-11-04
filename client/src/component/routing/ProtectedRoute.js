import React from 'react'
import { Route, useNavigate, Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/esm/Spinner'
import Dashboard from '../../views/Dashboard'
import NavbarMenu from '../Layout/NavbarMenu'

const ProtectedRoute = (props) => {

    let navigate = useNavigate()
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    if (authLoading) {
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    }
    return (
        isAuthenticated ? (<>
            <NavbarMenu />
            {props.name}
        </>)
            :
            <Navigate to='/login' />
    )
}

export default ProtectedRoute