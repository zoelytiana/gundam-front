import React from "react";

import Amazon from '../../assets/images/amazon_pay.png'
import Livraison from '../../assets/images/livraison_gratuite.png'
import Paiement from '../../assets/images/paiement_securise.png'
import Qualite from '../../assets/images/qualite_premium.png'
import Service from '../../assets/images/service_client_mobile.png'
const change = () => {
    console.log('ici');
}

const Bas = () => {

<<<<<<< HEAD
    return ( 
        <div className = 'flex flex-wrap justify-around h-1 p-4' >
            <a href = '/amazon' onClick = { change() } > < img src = { Amazon } alt = 'Amazon' /> </a> 
            <a href = '/livraison' onClick = { change() } > < img src = { Livraison } alt = 'Livraison' /> </a>  
            <a href = '/quality' onClick = { change() } > < img src = { Qualite } alt = 'Qualite' /> </a> 
            <a href = 'service' onClick = { change() } > < img  src = { Service } alt = 'Service' /> </a> 
=======
    return (
        < div className='flex-bas ' >

            <a href='/amazon'
                onClick={change()} > < img src={Amazon}
                    alt='Amazon' /> </a>
            <a href='/livraison'
                onClick={change()} > < img src={Livraison}
                    alt='Livraison' /> </a>
            <a href='/paiement'
                onClick={change()} > < img src={Paiement}
                    alt='Paiement' /> </a>
            <a href='/quality'
                onClick={change()} > < img src={Qualite}
                    alt='Qualite' /> </a>
            <a href='service'
                onClick={change()} > < img src={Service}
                    alt='Service' /> </a>
>>>>>>> 0a3f7c947a4f71c39f0104f75187ec6541e907ca
        </div>
    )
}


export default Bas;