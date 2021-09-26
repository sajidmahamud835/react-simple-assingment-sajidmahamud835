import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="container text-center bg-primary text-white p-5 rounded-3">
            <h1>Select The Best Web Developer For Your Project</h1>
            <h4 className="text-light">Choose the perfect person for your project among our top rated sellers.</h4>
            <h3 className="mt-3 text-warning">Total Budget: 5000$</h3>
        </header>
    );
};

export default Header;