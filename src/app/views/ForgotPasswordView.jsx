import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate } from './../api/backend/account';
import { URL_HOME } from './../shared/constants/urls/urlConstants';
import { isAuthenticated } from './../shared/services/accountServices';
import ForgotPassword from './../components/account/ForgotPassword';

/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const ForgotPasswordView = ({ history }) => {

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()

    const handleForgotPassword = (values) => {
        authenticate(values).then(res => {
            if(res.status === 200 && res.data.id_token) {
                dispatch(signIn(res.data.id_token))
                if(isAuthenticated) history.push(URL_HOME)
            }
        }).catch(() => setErrorLog(true))
    }

    return (
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto">
            <ForgotPassword submit={handleForgotPassword} errorLog={errorLog} />
            </div>
        </div>
    );
};

export default ForgotPasswordView
