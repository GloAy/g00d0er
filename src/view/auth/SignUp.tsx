
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseSetup';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../AuthContainer/AuthContainer';
import login from '../config/login';
import IPageProps from '../../interfaces/page.interface';

const SignUp: React.FunctionComponent<IPageProps> = props => {
    const [signUp,setSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    //use history callback 
    //this allows page to change the page with a command rather than returning a redirect
    const history = useNavigate();
    //navigate('/home');


    const signUpWithEmailAndPassword = () => {
        if (password !== confirm)
        {
            setError('Please make sure your passwords match.');
            return;
        }
//error checking 
//if the error isnt equal to empty when starting this function
//set the error to empty so any new errors that pop up wont override the old ones
        if (error !== '') setError('');

        setSignUp(true);

        auth.createUserWithEmailAndPassword(email, password)
        .then((result: any) => {
            login.info(result);
            history('/login');
        })
        .catch((error: { code: string | string[]; }) => {
            login.error(error);

            if (error.code.includes('auth/weak-password'))
            {
                setError('Please enter a stronger password.');
            }
            else if (error.code.includes('auth/email-already-in-use'))
            {
                setError('Email already in use.');
            }
            else
            {
                setError('Unable to sign up.  Please try again later.')
            }
            setSignUp(false);
        });
    }

    return (
        <AuthContainer header="SignUp">
            <FormGroup>
            <Input type="email" name="email" id="email" placeholder="E-mail Address"
            onChange={event => {setEmail(event.target.value)}} 
            value={email}/>
            </FormGroup>
            <FormGroup>
            <Input autoComplete="new-password" type="password" name="password" id="password" placeholder="Enter Password"
            onChange={event => {setPassword(event.target.value)}} 
            value={password}/>
            </FormGroup>
            <FormGroup>
            <Input autoComplete="new-password" type="password" name="confirm" id="confirm" placeholder="Confirm Password"
            onChange={event => {setConfirm(event.target.value)}} 
            value={confirm}/>
            </FormGroup>
            <Button disabled={signUp} block onClick={() => signUpWithEmailAndPassword()}>
            Sign Up
            </Button>
            <small>
                <p className="m-1 text-center">Already Have an Account? <Link to='/login'>Sign In</Link></p>
            </small>

        </AuthContainer>
    );
}

export default SignUp;