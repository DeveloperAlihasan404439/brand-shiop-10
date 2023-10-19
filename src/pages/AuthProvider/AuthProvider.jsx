import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase/Firebase";


export const AuthContext = createContext(null)
const auth = getAuth(app)
 const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const userCreate = (email, pass) =>{
        setLoader(true)
          return  createUserWithEmailAndPassword(auth, email, pass)
    }
    const userLogin = (email, pass) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const googleUser = proviterGoogle =>{
        setLoader(true)
        return signInWithPopup(auth, proviterGoogle)
    }
    const githubUser = proviterGithub=>{
        setLoader(true)
        return signInWithPopup(auth, proviterGithub)
    }
    const userLogOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscrip = onAuthStateChanged(auth, crrent =>{
            setUser(crrent)
            setLoader(false)
        })
        return ()=>{
            unSubscrip()
        }
    },[])
    const authinfo = {
        user,
        userCreate,
        userLogin,
        googleUser,
        githubUser,
        userLogOut,
        loader
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;