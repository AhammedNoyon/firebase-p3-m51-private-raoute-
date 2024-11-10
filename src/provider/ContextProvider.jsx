import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
  //state
  const [user, setUser] = useState(null);

  //create
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //collect logged
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  //save logged user
  useEffect(() => {
    const savedUser = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        return () => {
          savedUser();
        };
      }
    });
  }, []);

  const authInfo = {
    user,
    userCreate,
    loginUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
