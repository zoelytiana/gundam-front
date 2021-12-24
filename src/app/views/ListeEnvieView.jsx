
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ListeEnvies from './../components/account/ListeEnvies';
import { getAllWishes } from './../api/backend/wish';
import Loader from '../shared/components/utils-components/Loader';
import { accountLogin} from './../shared/services/accountServices';
import { removeWish } from './../api/backend/wish';
import Pagination from '../components/layouts/Pagination';

/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const ListEnvieView = ({ history }) => {

    const [currentWish, setCurrentWish] = useState(null);


    useEffect(() =>{
        loadWish();
    }, []);

    const currentWishtoDisplay = []
    const loadWish = () => {
        const userId = accountLogin();
        console.log('userId :', userId)
        getAllWishes(userId).then(res => {
            if(res.status === 200 && res.data) {
                console.log('Données:', res.data);
                setCurrentWish(res.data);
               
            }
        }).catch((error)=>console.log('Get wishes error !'));
    };

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()


    const handleWish = (values) => {
        console.log('values in handewish:',values)
        console.log('current wish userID:',currentWish.userId)
            removeWish(currentWish.userId, values).then(res => {
                if(res.status === 201) {
                    console.log('data registred :', res.data);  
                    loadWish();  
                }
            }).catch((error)=>console.log('Get account error !')); 
        }


    return (
        <div id="container-product">ici
            {currentWish!==null ? <ListeEnvies submit={handleWish} errorLog={errorLog} currentWish={currentWish} setCurrentWish={setCurrentWish} />: <Loader/>}
            
        </div>
    );
};

export default ListEnvieView
