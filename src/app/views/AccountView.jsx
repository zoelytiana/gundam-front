import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updateAccount, getAccount, updatePassword } from './../api/backend/account';
import { accountLogin} from './../shared/services/accountServices';
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

 /*   const userInit = {
  
        email: "",
        name: "",
        firstName: "",
        phone: "",
        birthday: "",
        billingAddress:{street:"",city:"", country:""},
        deliveryAddress:{street:"",city:"", country:""},
        password: ""
      };*/


    const [currentAccount, setCurrentAccount] = useState(null)

    useEffect(() =>{
        loadAccount();
    }, []);


    const loadAccount = () => {
        const id = accountLogin();
        console.log('id :', id)
        getAccount(id).then(res => {
            if(res.status === 200 && res.data) {
                console.log('Données:', res.data);
                setCurrentAccount(res.data);
            }
        }).catch((error)=>console.log('Get account error !'));
    };

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()
    
    const handleAccount = (values) => {
        console.log('valeur de deliveryadresse', values);
        
        if (values.deliveryAddressOk === true) {
            values.userDeliveryAddress.street = values.userBillingAddress.street;
            values.userDeliveryAddress.city = values.userBillingAddress.city;
            values.userDeliveryAddress.country = values.userBillingAddress.country;
        }
            console.log('update dans handle account', values);
        updateAccount(values._id, values).then(res => {
            console.log('data :', res.data);
            if(res.status === 201) {
                console.log('data registred :', res.data);  
                //setCurrentAccount(res.data);  
                getAccount(values._id).then(res => {
                    if(res.status === 200 && res.data) {
                        console.log('Données:', res.data);
                        setCurrentAccount(res.data);
                    }
                }).catch((error)=>console.log('Get account error !'));        
            }
        })
    }

    const handleAccountPassword = (values) => {
        console.log('id', values._id);
        console.log('old password', values.oldPassword);
        console.log('new password', values.newPassword);
        console.log('check password', values.checkPassword);
        console.log('password actuel', currentAccount.userPassword);
        //values.oldPassword === currentAccount.password &&
        if(values.newPassword === values.checkPassword) {
            updateAccount(values._id, values).then(res => {
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