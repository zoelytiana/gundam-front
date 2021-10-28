
import React, { useState } from 'react'
import ListeEnvies from './../components/account/ListeEnvies';
import './../assets/styles/styles-product.css';


/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const ListEnvieView = ({ history }) => {

    const [errorLog] = useState(false)

    return (
        <div id="container-product">
            <ListeEnvies  errorLog={errorLog} />
        </div>
    );
};

export default ListEnvieView
