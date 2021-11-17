import React from "react";

const change = () => {
    console.log('ici');
}

const AccountMenu = () => {

    return ( < div className = 'w-1/20 bg-red-800 py-8 grid grid-cols-1 divide-y divide-white-500'> 
        <div className = 'text-lg text-white font-black uppercase p-8'><a href = '/Account'onClick = { change() } > Mes Informations personnelles </a></div>

        <div className = 'text-lg text-white font-black uppercase p-8'><a href = '/' onClick = { change() } > Mes commandes </a></div>

        <div className = 'text-lg text-white font-black uppercase p-8'><a href = '/listeenvie' onClick = { change() } > Mes listes d'envies </a></div>

        <div className = 'text-lg text-white font-black uppercase p-8'><a href = '/' onClick = { change() } > Mes retours </a></div>
        </div>
    )
}


export default AccountMenu;