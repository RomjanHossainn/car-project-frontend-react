import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {

    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }

    

    useEffect(() =>{
        setLoading(true)
        const unSubsCribe = onAuthStateChanged(auth,(currentUser) => {
            setUsers(currentUser)
            setLoading(false)
        })


        return () =>{
            unSubsCribe()
        }

    },[])

    const userInfo = {
        users,
        loading,
        createUser
    }
    return (
      <Authcontext.Provider 
        value={userInfo}>{children}
      </Authcontext.Provider>
    );
};

export default AuthProvider;