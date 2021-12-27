import IRoute from "../../interfaces/route.interface";
import ChangePasswordPage from "../authpages/change";
import ForgotPasswordPage from "../authpages/forget";
import SigninPage from "../authpages/signin";
import SignoutPage from "../authpages/signout";
import HomePage from "../Homepage";
import SignupPage from "../authpages/signup"

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
        name: 'Signup Page',
        protected: false
    },
    {
        path: '/signin',
        element: SigninPage,
        name: 'Signin Page',
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
        element: SignoutPage,
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
