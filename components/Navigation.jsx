import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/rps">Rock Paper Scissors</Link></li>
                <li><Link to="/tictactoe">Tic Tac Toe</Link></li>
            </nav>
        </div>
    );
};

export default Navigation;