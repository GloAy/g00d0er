import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../AuthContainer/AuthContainer';
import { auth } from '../config/firebaseSetup';
import login from '../config/login';
import IPageProps from '../../interfaces/page.interface';
import ErrorMessage from '../../errormessage/errormessage';
import '../../App.css'



const SigninPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            login.info(result);
            navigate('/homepage');
        })
        .catch(error => {
            login.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }


    return (
        <AuthContainer header="Login">
            <FormGroup >
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
            </FormGroup>
            <Button
                disabled={authenticating}
                color="dark"
                block
                onClick={() => signInWithEmailAndPassword()}
                className="submit"
            >
                Sign In
            </Button>
            <small>
                <p className='m-1 text-center'>Don't have an account? <Link to="/signup">Register here.</Link></p>
                <p className='m-1 text-center'><Link to="/forget">Forget your password?</Link></p>
            </small>
            <ErrorMessage error={error} />
        </AuthContainer>
    );
}

export default SigninPage;