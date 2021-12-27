import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import AuthContainer from '../../AuthContainer/AuthContainer';
import { auth } from '../config/firebaseSetup';
import login from '../config/login';
import IPageProps from '../../interfaces/page.interface';



const SignoutPage: React.FunctionComponent<IPageProps> = props => {
    const navigate= useNavigate();

    const Logout = () => {
        auth.signOut()
        .then(() => navigate('/signin'))
        .catch(error => login.error(error));
    }

    return (
        <AuthContainer header="Logout">
                <Button color="info" className="mr-2" onClick={() => Logout()}>Logout</Button>
        </AuthContainer>
        
    );
}

export default SignoutPage;