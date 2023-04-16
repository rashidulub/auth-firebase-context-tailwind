import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../assets/firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SingInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return()=>{
            unsubscribe();
        }
    } ,[])

    const logOut =()=>{
        return signOut(auth);
    }




    
   const authInfo={
    user,
    loading,
    createUser,
    SingInUser,
    logOut
   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;