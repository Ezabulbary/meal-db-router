import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-300 h-20 pt-6 text-center'>
            <Link className='p-2 md:p-4 hover:text-yellow-700' to='/'>Home</Link>
            <Link className='p-2 md:p-4 hover:text-yellow-700' to='/about'>About</Link>
            <Link className='p-2 md:p-4 hover:text-yellow-700' to='/restaurant'>Restaurant</Link>
            <Link className='p-2 md:p-4 hover:text-yellow-700' to='/recharts'>Recharts</Link>
            <Link className='p-2 md:p-4 hover:text-yellow-700' to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;