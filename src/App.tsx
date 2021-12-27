import React, { useEffect, useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { auth } from './view/config/firebaseSetup';
import login from './view/config/login';
import Homepage from './view/Homepage';
import SignupPage from './view/pages/signup'
import SigninPage from './view/pages/signin';
import ForgotPasswordPage from './view/pages/forget';

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user)
            {
                login.info('User detected.');
            }
            else
            {
                login.info('No user detected');
            }

            setLoading(false);
        })
    }, []);

    if (loading)
        return <Spinner color="info" />

    return (
        <div>
            <Routes>
            <Route
            path='/signin'
            element={<SigninPage name={'Signin Page'} />}
            />
            <Route
            path='/signup'
            element={<SignupPage name={'Signup Page'} />}
            />
            <Route
            path='/'
            element={<Homepage name={'HomePage'} />}
            />
            <Route
            path='/forget'
            element={<ForgotPasswordPage name={'Forgot Password Page'} />}
            />
            </Routes>
        </div>
    );
}

export default Application;