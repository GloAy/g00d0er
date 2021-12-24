import React from "react";
import firebase from 'firebase/compat/app';


export const AuthContext = React.createContext<firebase.User | null>(null);



// the type of our AuthContext can be one of two things. Either firebase.User or null. Null will be the value when a user is not signed in.