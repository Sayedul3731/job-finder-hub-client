/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";



export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const userCreate = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        userCreate,
        login,
        logInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;