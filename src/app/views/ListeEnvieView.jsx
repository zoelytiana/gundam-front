
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate } from './../api/backend/account';
import { URL_HOME } from './../shared/constants/urls/urlConstants';
import { isAuthenticated } from './../shared/services/accountServices';
import ListeEnvies from './../components/account/ListeEnvies';


/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const ListEnvieView = ({ history }) => {

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()

    const handleContact = (values) => {
        authenticate(values).then(res => {
            if(res.status === 200 && res.data.id_token) {
                dispatch(signIn(res.data.id_token))
                if(isAuthenticated) history.push(URL_HOME)
            }
        }).catch(() => setErrorLog(true))
    }

    return (
        <div className="flex w-full">
            <ListeEnvies submit={handleContact} errorLog={errorLog} />
        </div>
    );
};

export default ListEnvieView
