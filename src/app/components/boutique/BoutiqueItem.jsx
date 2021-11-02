import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import classes from "./BoutiqueItem.module.css"

function boutiqueItem(props) {
    return (
        <div className={classes.boutiqueCard}>
            <ul className="flex flex-wrap justify-center ">
                {props.gundams.slice(0, 9).map(gundam => {
                    return (
                        <li className="m-px" key={gundam.id}>
                            <img src={gundam.image} alt={gundam.name} />
                            <div className={classes.boutiqueInfos}>
                                <div className="flex flex-col items-center">
                                    <h4 className="font-bold">{gundam.name}</h4>
                                    <p>{gundam.price}€</p>
                                </div>
                                <div className={classes.boutiqueButton}>
                                    <Link to={URL_DETAIL}>
                                        <button><img className={classes.buttonCart} src="./../../assets/images/view.png" alt="" /></button>
                                    </Link>
                                    <Link to={URL_PANIER}>
                                        <button><img className={classes.buttonCart} src="./../../assets/images/cart.png" alt="" /></button>
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
