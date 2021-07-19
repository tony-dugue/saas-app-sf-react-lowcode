import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>ACCUEIL</NavLink>
            <NavLink to='/members'>MEMBRES</NavLink>
            <NavLink to='/users'>USERS</NavLink>
        </div>
    );
};

export default Navigation;

