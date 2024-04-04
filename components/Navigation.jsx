import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/rps">Rock Paper Scissors</Link></li>
                <li>Tic Tac Toe</li>
            </nav>
        </div>
    );
};

export default Navigation;