import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {


    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    
    }


    

    useEffect(() =>{
        setLoading(true)
        const unSubsCribe = onAuthStateChanged(auth,(currentUser) => {
            setUsers(currentUser)
            console.log(currentUser)
            setLoading(false)
        })


        return () =>{
            unSubsCribe()
        }

    },[])


    const [location,setLocation] = useState('')
    const getCurrentLocation = (location) => {
      setLoading(true)
      setLocation(location)
    };
    
    


    const userInfo = {
      users,
      loading,
      createUser,
      signInUser,
      logOut,
      getCurrentLocation,
      location
    };
    return (
      <Authcontext.Provider 
        value={userInfo}>{children}
      </Authcontext.Provider>
    );
};

export default AuthProvider;