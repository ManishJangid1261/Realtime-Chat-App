import React from 'react'
import { LogOut } from 'react-feather'
import { useAuth } from '../utlis/AuthContext'

function Header() {

    const {user , handleUserLogout} = useAuth()

    return (
        <div id='header--wrapper'>
            {user ? (
                <>
                Welcome {user.name}                
                <LogOut 
                onClick={handleUserLogout}
                className='header--link'/>
                
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}

export default Header
