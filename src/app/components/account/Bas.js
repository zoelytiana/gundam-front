import React from "react";

import Amazon from '../../img/amazon_pay.png'
import Livraison from '../../img/livraison_gratuite.png'
import Paiement from '../../img/paiement_securise.png'
import Qualite from '../../img/qualite_premium.png'
import Service from '../../img/service_client_mobile.png'
const change = () =>{
    console.log('ici');
}

const Bas = ()=>{

        return(
            <div className='flex-bas '>
                <a href='/amazon' onClick={change()}><img src={Amazon} alt='Amazon'/></a> 
                <a href='/livraison' onClick={change()}><img src={Livraison} alt='Livraison'/></a> 
                <a href='/paiement' onClick={change()}><img src={Paiement} alt='Paiement' /></a>
                <a href='/quality' onClick={change()}><img src={Qualite} alt='Qualite'/></a>
                <a href='service' onClick={change()}><img src={Service} alt='Service'/></a>  
            </div>
        )
    }


export default Bas;