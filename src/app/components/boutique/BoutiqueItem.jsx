import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL } from './../../shared/constants/urls/urlConstants';
import classes from "./BoutiqueItem.module.css"

function boutiqueItem(props) {
    return (
        <div className={classes.boutiqueCard}>
            <ul>
                {props.gundams.map(gundam => {
                    return (
                        <li key={gundam.id}>
                            <img src={gundam.image} alt={gundam.name} />
                            <div className={classes.boutiqueInfos}>
                                <div className={classes.boutiquePrice}>
                                    <h3>{gundam.name}</h3>
                                    <p>{gundam.price}€</p>
                                </div>
                                <div className={classes.boutiqueButton}>
                                    <Link to={URL_DETAIL}>
                                        <button>Détail</button>
                                    </Link>
                                    <button>Panier</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default boutiqueItem
