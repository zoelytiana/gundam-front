import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_REGISTER, URL_ADMIN_HOME, URL_BOUTIQUE, URL_DETAIL, URL_PANIER, URL_ENVIE, URL_PRESENTATION, URL_FORGOTPASSWORD } from '../shared/constants/urls/urlConstants';

import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';

import BoutiqueView from '../views/BoutiqueView';
import DetailView from '../views/DetailView';
import PanierView from '../views/PanierView';
import EnvieView from '../views/EnvieView';
import PresentationView from '../views/PresentationView';
import ForgotPasswordView from '../views/ForgotPasswordView';

import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import { ROLE_ADMIN } from '../shared/constants/rolesConstant';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';

/**
 * Routes of the application
 * with public and private route
 * 
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <PrivateRoute path={URL_ADMIN_HOME} component={AdminHomeView} roles={[ROLE_ADMIN]} />

            <Route exact path={URL_HOME} component={HomeView} />
            <Route path={URL_BOUTIQUE} component={BoutiqueView} />
            <Route path={URL_DETAIL} component={DetailView} />
            <Route path={URL_PANIER} component={PanierView} />
            <Route path={URL_ENVIE} component={EnvieView} />
            <Route path={URL_PRESENTATION} component={PresentationView} />
            <Route path={URL_FORGOTPASSWORD} component={ForgotPasswordView} />

            <Route path={URL_LOGIN} component={LoginView} />
            <Route path={URL_REGISTER} component={RegisterView} />
        </Switch>
    );
};

export default Routes;