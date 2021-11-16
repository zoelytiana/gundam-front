import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
            URL_HOME, 
            URL_LOGIN, 
            URL_REGISTER, 
            URL_ADMIN_HOME, 
            URL_BOUTIQUE, 
            URL_DETAIL, 
            URL_PANIER, 
            URL_ENVIE, 
            URL_PRESENTATION, 
            URL_FORGOTPASSWORD, 
            URL_CGU,
            URL_CONTACT,
            URL_MENTIONS,
            URL_PAIEMENT,
            URL_LIVRAISON_RETOUR,
            URL_INFO_PERSO,
            URL_RETOUR_PRODUIT,
            URL_COMMANDE,
            URL_ADRESSE,
            URL_CONTACT_FORM, 
            URL_LIVRAISON, 
            URL_LISTEENVIES,
            URL_TICKET,
            URL_VALIDATION,
            URL_CLAIM,
            URL_ACCOUNT
        } from '../shared/constants/urls/urlConstants';

import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';

import BoutiqueView from '../views/BoutiqueView';
import DetailView from '../views/DetailView';
import PanierView from '../views/PanierView';
import EnvieView from '../views/EnvieView';
import PresentationView from '../views/PresentationView';
import ContactView from '../views/ContactView';
import MentionsView from '../views/MentionsView';
import PaiementView from '../views/PaiementView';
import LivraisonRetourView from '../views/LivraisonRetourView';

import InfoPersoView from '../views/InfoPersoView';
import RetourProduitView from '../views/RetourProduitView';
import CommandeView from '../views/CommandeView';
import AdresseView from '../views/AdresseView';

import CguView from '../views/CguView';
import ForgotPasswordView from '../views/ForgotPasswordView';
import ContactFormView from '../views/ContactFormView';
import LivraisonView from '../views/LivraisonView';
import ListeEnviesView from '../views/ListeEnvieView';
import TicketView from '../views/TicketView';
import ValidationView from '../views/ValidationView';
import ClaimView from '../views/ClaimView';
import AccountView from '../views/AccountView';

import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import { ROLE_ADMIN, ROLE_USER } from '../shared/constants/rolesConstant';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';

/**
 * Routes of the application
 * with public and private route
 * 
 * @author Peter Mollet
 * @author Michael Helinckx
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
            
            <Route path={URL_CONTACT} component={ContactView} />
            <Route path={URL_MENTIONS} component={MentionsView} />
            <Route path={URL_PAIEMENT} component={PaiementView} />
            <Route path={URL_LIVRAISON_RETOUR} component={LivraisonRetourView} />
            <Route path={URL_CGU} component={CguView} /> 

            <Route path={URL_FORGOTPASSWORD} component={ForgotPasswordView} />

            <PrivateRoute path={URL_INFO_PERSO} component={InfoPersoView} roles={[ROLE_USER]} />
            <PrivateRoute path={URL_RETOUR_PRODUIT} component={RetourProduitView} roles={[ROLE_USER]} />
            <PrivateRoute path={URL_COMMANDE} component={CommandeView} roles={[ROLE_USER]} />
            <PrivateRoute path={URL_ADRESSE} component={AdresseView} roles={[ROLE_USER]} />

            <Route path={URL_CONTACT_FORM} component={ContactFormView} />
            <Route path={URL_LIVRAISON} component={LivraisonView} />
            <Route path={URL_LISTEENVIES} component={ListeEnviesView} />
            <Route path={URL_TICKET} component={TicketView} />
            <Route path={URL_VALIDATION} component={ValidationView} />
            <Route path={URL_CLAIM} component={ClaimView} />

            <Route path={URL_LOGIN} component={LoginView} />
            <Route path={URL_REGISTER} component={RegisterView} />
            <Route path={URL_ACCOUNT} component={AccountView} />
        </Switch>
    );
};

export default Routes;