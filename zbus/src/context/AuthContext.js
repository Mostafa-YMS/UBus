import jwt_decode from "jwt-decode"
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
        
        // let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
        let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
        const navigate = useNavigate()
        let loginUser = async (username, password)=> {

            let response = await fetch('http://127.0.0.1:8000/user/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':username, 'password':password})// form is the target
            }) 
            
            let data = await response.json()

        if(response.status === 200){
            setUser(jwt_decode(data.jwt))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/home')
        }else{
            document.getElementById("announce1").innerHTML='Wrong username or password'
        }
    }
    let logOut = async (e )=> {
        localStorage.clear()
        user=null
        navigate('/login')
    }

    let contextData = {
        user:user,
        logOut:logOut,
        loginUser:loginUser,

    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}