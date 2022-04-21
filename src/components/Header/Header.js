import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/restaurant'>Restaurant</Link>
            <Link to='/meal'>Meal</Link>
        </div>
    );
};

export default Header;