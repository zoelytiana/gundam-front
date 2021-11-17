import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate } from './../api/backend/account';
import { URL_HOME } from './../shared/constants/urls/urlConstants';
import { isAuthenticated } from './../shared/services/accountServices';
import Login from './../components/account/Login';
// import Modal from "./../components/account/Modal";
/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
const LoginView = ({ history }) => {

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()

    // const [openModal, setOpenModal] = useState(false);
    // const toggleModal = () => {
    //     setOpenModal(true)
    // }

    const handleLogin = (values) => {
        authenticate(values).then(res => {
            console.log('res:', res.data)
            if(res.status === 200 && res.data.access_token) {
                dispatch(signIn(res.data.access_token))
                if(isAuthenticated) history.push(URL_HOME)
            }
        }).catch(() => setErrorLog(true))
    }


    return (
        <div className="container">
            <div className="max-w-7xl mx-auto">
                <Login submit={handleLogin} errorLog={errorLog} />
                {/* <button onClick={() => toggleModal()} >Mot de passe Oublié?</button>
                <Modal toggleModal={openModal} /> */}
            </div>
        </div>
    );
};

export default LoginView