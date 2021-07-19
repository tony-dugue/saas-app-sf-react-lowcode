import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundScene = () => {
    return (
        <div>
            <h1>Page 404</h1>
            <NavLink to='/'>
                <button>Retour à la page d'accueil</button>
            </NavLink>
        </div>
    );
};

export default NotFoundScene;
