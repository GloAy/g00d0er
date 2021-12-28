import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../AuthContainer/AuthContainer';
import { auth } from '../config/firebaseSetup';
import login from '../config/login';
import IPageProps from '../../interfaces/page.interface';
import ErrorMessage from '../../errormessage/errormessage';

const ForgotPasswordPage: React.FunctionComponent<IPageProps> = props => {
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const resetPasswordRequest = () => {
        if (error !== '') setError('');

        setSending(true);

        auth.sendPasswordResetEmail(email)
        .then(() => {
            login.info('Email sent.');
            setSent(true);
            setSending(false);
        })
        .catch(error => {
            login.error(error);
            setError(error.message);
            setSending(false);
        });
    }

    return (
        
        <AuthContainer header="Send Password Reset">
            {sent ?
                <p>A link has been sent to your email with instructions.</p>
            :
                <>
                    <p>Please enter your email.</p>
                    <FormGroup>
                        <Input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                    </FormGroup>
                    <Button
                        disabled={sending}
                        color="success"
                        block
                        onClick={() => resetPasswordRequest()}
                        className="submit"
                    >
                        Send Reset Link
                    </Button>
                </>
            }
            <ErrorMessage error={error} />
        </AuthContainer>
    );
}

export default ForgotPasswordPage;