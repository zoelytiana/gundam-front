import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { updateAccount, getAccount } from './../api/backend/account';
import { URL_HOME } from './../shared/constants/urls/urlConstants';
import { accountLogin, isAuthenticated } from './../shared/services/accountServices';
import Account from './../components/account/Account';
import AccountMenu from './../components/account/AccountMenu';
import Loader from '../shared/components/utils-components/Loader'

/**
 * View/Page Account
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const AccountView = ({ history }) => {


    const [currentAccount, setCurrentAccount] = useState(null)

    useEffect(() =>{
        loadAccount();
    }, []);


    const loadAccount = () => {
        const login = accountLogin();
        console.log('login :', login)
        getAccount(login).then(res => {
            if(res.status === 200 && res.data) {
                console.log('Données:', res.data);
                setCurrentAccount(res.data);
            }
        }).catch((error)=>console.log('Get account error !'));
    };

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()
    
    const handleAccount = (values) => {
        console.log('update', values.email);
        updateAccount(values.id, values).then(res => {
            console.log('data :', res.data);
            if(res.status === 200) {
                console.log('data registred :', res.data);  
                //setCurrentAccount(res.data);  
                getAccount(values.email).then(res => {
                    if(res.status === 200 && res.data) {
                        console.log('Données:', res.data);
                        setCurrentAccount(res.data);
                    }
                }).catch((error)=>console.log('Get account error !'));        
            }
        })
    }

    const handleAccountPassword = (values) => {
        console.log('password', values.password);
        console.log('password1', values.password1);
        console.log('password2', values.password2);
        console.log('password actuel', currentAccount[0].password);
        if(values.password === currentAccount[0].password && values.password1 === values.password2) {
            const  valuesPassword = {
                email: currentAccount[0].email,
                name: currentAccount[0].name,
                firstName: currentAccount[0].firstName,
                phone: currentAccount[0].phone,
                birthday: currentAccount[0].birthday,
                street: currentAccount[0].street,
                city: currentAccount[0].city,
                country: currentAccount[0].country,
                password : values.password2
                }
            updateAccount(values.id, valuesPassword).then(res => {
                console.log('data :', res.data);
                if(res.status === 200) {
                    console.log('data registred :', res.data);  
                    //setCurrentAccount(res.data);  
                    getAccount(values.email).then(res => {
                        if(res.status === 200 && res.data) {
                            console.log('Données:', res.data);
                            setCurrentAccount(res.data);
                        }
                    }).catch((error)=>console.log('Get account error !'));        
                }
            })
        }
    }    


    return (
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto">
              <h1>  Mon Compte</h1>
              <div className="flex items-start">
                <AccountMenu />
                
                {currentAccount!==null ? <Account submit={handleAccount} submitPassword={handleAccountPassword} errorLog={errorLog} currentAccount={currentAccount} />: <Loader/>}
                
              </div>
            </div>
        </div>
    );
};
//<Account submit={handleRegister} errorLog={errorLog} value={currentAccount}/>
export default AccountView