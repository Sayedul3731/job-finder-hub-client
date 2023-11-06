/* eslint-disable react/prop-types */
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";



export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const userCreate = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        userCreate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;