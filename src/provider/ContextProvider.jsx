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
  const [reload, setReload] = useState(true);

  //create
  const userCreate = (email, password) => {
    setReload(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //collect logged
  const loginUser = (email, password) => {
    setReload(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // //sign out
  // const signOutUser = () => {
  //   return signOut(auth);
  // };

  const userSignOut = () => {
    setReload(true);
    return signOut(auth);
  };

  //save logged user
  useEffect(() => {
    const savedUser = onAuthStateChanged(auth, (currentUser) => {
      console.log("that is current user", currentUser);
      setUser(currentUser);
      setReload(false);
    });
    return () => {
      savedUser();
    };
  }, []);

  const authInfo = {
    user,
    reload,
    userCreate,
    loginUser,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
