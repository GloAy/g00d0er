import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from 'firebase/compat/app';
import { auth } from "../firebaseSetup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};



// whenever we sign in, create an account, or sign out it will set the state of our user accordingly. It will either set the state to be the logged in user or null when no user is signed in.