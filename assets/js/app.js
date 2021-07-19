import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'styles/app.scss';
import Router from 'app/routes';
import HomeScene from 'scenes/HomeScene';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));


