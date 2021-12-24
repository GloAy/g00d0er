import React, { useContext, useRef } from "react";
import { Stack, Button, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup";
import './App.css';


function App() {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  //useRef creates an object that will hold on to values even when state changes and the component re-renders. This makes it very useful for doing things like tracking the previous state or counting how many times a state changes.

  const signUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async () => {
    try {
     await auth.signInWithEmailAndPassword(
       emailRef.current!.value,
       passwordRef.current!.value
     ) 
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () =>{
    await auth.signOut()
  }

  return (
    <div className="main">
      <Navbar className="nav-bar" variant="dark">
        <Navbar.Brand >g00doer</Navbar.Brand>
        <Button onClick={signOut}
        type="button" variant="secondary">
          Sign Out
      </Button>
      </Navbar>
      {!user ? (
      <Container style={{ maxWidth: "500px" }} fluid>
        <Form className="mt-4">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            ref={passwordRef} type="password" placeholder="password" />
          </Form.Group>
          <Form>
          <Stack gap={2} direction="horizontal" className="col-md-5 mx-auto">
          <Button onClick={signIn}
              type="button"  variant="secondary" aria-label="Third group">
                Sign In
              </Button>
              <Button onClick={signUp}type="button" aria-label="Third group">
                Sign Up
              </Button>
          </Stack>
          </Form>
        </Form>
      </Container> ) : (<h3>Welcome</h3> )}
    </div>
  );
}

export default App;