import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'styles/app.scss';
import Router from 'app/routes';
import HomeScene from 'scenes/HomeScene';

// REDUX
import store from 'services/stores/store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));


