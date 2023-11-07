/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";



export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

   

    const userCreate = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
      }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        userCreate,
        login,
        logInWithGoogle,
        user,
        loading,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;