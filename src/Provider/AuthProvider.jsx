
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setloading] = useState(true)

    const createUSer=(email,password)=>{
        setloading(true)
     return createUserWithEmailAndPassword(auth,email,password)

    }
    const Singin = (email,password)=>{
        setloading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setloading(true)
       return signOut(auth)
    }

    useEffect(()=>{
       const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user in ',currentUser) ;
            setUser(currentUser)
            setloading(false)
         }) ;
         return ()=> {
            Unsubscribe();
         }
    },[])
 
    const authInfo={
        user,
        loading,
        createUSer,
        logout,
        Singin ,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;