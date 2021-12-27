import IRoute from "../../interfaces/route.interface";
import ChangePasswordPage from "../pages/change";
import ForgotPasswordPage from "../pages/forget";
import SigninPage from "../pages/signin";
import SignOut from "../pages/signout";
import SignupPage from "../pages/signup";
import HomePage from "../Homepage";

const routes: IRoute[] = [
    {
        path: '/',
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
        path: '/signin',
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
