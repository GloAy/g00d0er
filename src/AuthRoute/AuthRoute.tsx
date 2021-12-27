import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../view/config/firebaseSetup';
import login from '../view/config/login';

export interface IAuthRouteProps { }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    if (!auth.currentUser)
    {
        login.warn('No user detected, redirecting');
        return <Link to="/login" />;
    }

    return (
        <div>{children}</div>
    );
}

export default AuthRoute;