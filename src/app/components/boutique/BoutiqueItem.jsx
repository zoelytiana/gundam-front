import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import classes from "./BoutiqueItem.module.css"

function boutiqueItem(props) {
    return (
        <div className={classes.boutiqueCard}>
            <ul>
                {props.gundams.slice(0, 9).map(gundam => {
                    return (
                        <li key={gundam.id}>
                            <img src={gundam.image} alt={gundam.name} />
                            <div className={classes.boutiqueInfos}>
                                <div className={classes.boutiquePrice}>
                                    <h1>{gundam.name}</h1>
                                    <p>{gundam.price}€</p>
                                </div>
                                <div className={classes.boutiqueButton}>
                                    <Link to={URL_DETAIL}>
                                        <button>Détail</button>
                                    </Link>
                                    <Link to={URL_PANIER}>
                                        <button>Panier</button>
                                    </Link>
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
