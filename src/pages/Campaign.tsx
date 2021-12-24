import React from 'react';
import { Link } from 'react-router-dom';
import IPageProps from '../interfaces/page.interface';

const Campaign: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
        <h1> Cart Page </h1>
        <Link to={`/`}>
            <button>Back Home</button>
        </Link>
    </div>
    );
}

export default Campaign;