import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { register } from './../api/backend/account';
import { URL_LOGIN } from './../shared/constants/urls/urlConstants';
import { isAuthenticated } from './../shared/services/accountServices';
import Register from './../components/account/Register';
import { useHistory } from 'react-router-dom';

/**
 * View/Page Register
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const RegisterView = ( ) => {
    const history = useHistory()
    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()

    const handleRegister = (values) => {
        console.log(values);
        if(values.userPassword === values.userPasswordConfirmation && values.cgu === true) {
            console.log("ok",values);
        register(values).then(res => {
            console.log('data2 :', res.data);
            if(res.status === 201) {
                console.log('data 201 toto :', res.data);
                console.log('History :', history);
                history.push(URL_LOGIN).catch(()=>console.log('history'))                
            }
        }).catch((error) => {
            console.log('object erreur',error)
            setErrorLog(true)})
        }else{
            console.log('object')
            setErrorLog(true)
        }
    }

    return (
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto">
            <Register submit={handleRegister} errorLog={errorLog} />
            </div>
        </div>
    );
};

export default RegisterView