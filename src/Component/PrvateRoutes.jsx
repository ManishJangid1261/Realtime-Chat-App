import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utlis/AuthContext'
function PrvateRoutes() {

    const {user} = useAuth()

    return (
        <>
        {user ? <Outlet/> : <Navigate to='/login'/>}
        </>
    )
}

export default PrvateRoutes
