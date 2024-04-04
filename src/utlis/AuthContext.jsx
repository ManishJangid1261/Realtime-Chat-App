import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../AppwriteConfig";
import { useNavigate } from "react-router";
import { ID } from "appwrite";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserOnLoad()
    }, [])


    const getUserOnLoad = async () => {
        try {
            const accountDetaials = await account.get()
            setUser(accountDetaials)
        } catch (error) {
            console.error(error);
        }
        setloading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()

        try {
            const response = await account.createEmailPasswordSession(credentials.email, credentials.password);
            const accountDetaials = await account.get()
            setUser(accountDetaials)
            navigate('/')
        } catch (error) {
            console.error(error)
        }

    }

    const handleUserLogout = async () => {
        const response = await account.deleteSession('current')
        setUser(null)
    }

    const handleUserRegister = async (e, credentials) => {
            e.preventDefault()
            console.log('Handle Register triggered!', credentials)
    
            if(credentials.password1 !== credentials.password2){
                alert('Passwords did not match!')
                return 
            }
    
            try{
                
                let response = await account.create(ID.unique(), credentials.email, credentials.password1, credentials.name);
                console.log('User registered!', response)
    
                await account.createEmailPasswordSession(credentials.email, credentials.password1)
                let accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/')
            }catch(error){
                console.error(error)
            }
        }
    const contextData = {
        user,
        handleUserLogin,
        handleUserLogout,
        handleUserRegister
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext