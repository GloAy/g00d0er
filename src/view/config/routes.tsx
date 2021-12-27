import IRoute from "../../interfaces/route.interface";
import ChangePasswordPage from "../authpages/change";
import ForgotPasswordPage from "../authpages/forget";
import SigninPage from "../authpages/signin";
import SignOut from "../authpages/signout";
import SignupPage from "../authpages/signup";
import HomePage from "../Homepage";

const routes: IRoute[] = [
    {
        path: '/homepage',
        element: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/signup',
        element: SignupPage,
        name: 'SignUp Page',
        protected: false
    },
    {
        path: '/',
        element: SigninPage,
        name: 'SignIn Page',
        protected: false
    },
    {
        path: '/Change',
        element: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/signout',
        element:SignOut,
        name: 'Signout Page',
        protected: true
    },
    {
        path: '/forget',
        element: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
];

export default routes;
