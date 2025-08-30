    import { createContext, useContext, useState } from 'react';
    import { auth, db } from '../firebase/firebase.js';

    import {onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from 'firebase/auth';


import { doc, setDoc } from 'firebase/firestore';
    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const[error,setError] = useState(false);
    

 const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      setUser(firebaseUser);

      alert("Login successful!");
      return { success: true, user: firebaseUser };

    } catch (err) {
      alert("Invalid email or password");
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };



    const register =async({firstName , lastName , role , email,password}) => {

        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const firebaseUser = userCredential.user;

        await setDoc(doc(db, "users", firebaseUser.uid), {
      firstName,
      lastName,
      role,
      createdAt: new Date()
    });

     setUser({ ...userCredential.user, firstName, lastName, role });

      alert("Registered");

      return { success: true, user: { ...userCredential.user, firstName, lastName, role } };



        }
        
        catch (err) {
      alert("Register Error");

        console.log("Register Error Occurred: " + err);
        }
    };

    const logout = () => {
      console.log("Logging out");
    }



    const authData = {
        user,
        loading,
        setUser,
        setLoading,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={authData}>
        {children}
        </AuthContext.Provider>
    );
    
    };

    export const useAuth = () =>  useContext(AuthContext);

    export default AuthContext;
