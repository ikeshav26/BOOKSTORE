import React, { createContext, useContext, useState } from 'react'


export const AuthContext=createContext()
export default function Authprovider  ({children})  {
    const initialuser=localStorage.getItem("user")
    const [authuser, setauthuser] = useState(
        initialuser ? JSON.parse(initialuser) : undefined
    )
 return(
    <AuthContext.Provider value={[authuser,setauthuser]}>
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth=()=>useContext(AuthContext)
