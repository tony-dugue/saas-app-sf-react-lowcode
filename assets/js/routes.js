import React from 'react';
import { Switch, Redirect, Route, Link, withRouter } from 'react-router-dom';

import Navigation from 'components/Navigation';
import NotFoundScene from 'scenes/NotFoundScene';
import HomeScene from 'scenes/HomeScene';
import MembersScene from 'scenes/MembersScene';
import UsersScene from 'scenes/UsersScene';

const Router = () => {
    return(
        <>
            <Navigation />

            <Switch>
                <Redirect exact from="/" to="/accueil" />
                <Route exact path="/accueil" component={HomeScene} />
                <Route exact path="/members" component={MembersScene} />
                <Route exact path="/users" component={UsersScene} />
                <Route component={NotFoundScene} />
            </Switch>
        </>
    )
}

export default Router;

