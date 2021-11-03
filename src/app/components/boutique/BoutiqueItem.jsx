import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import view from "./../../assets/images/view.png";
import cart from "./../../assets/images/cart.png";

function boutiqueItem(props) {
    return (
        <div className="boutiqueCard">
            <ul className="flex flex-wrap justify-center ">
                {props.gundams.slice(0, 9).map(gundam => {
                    return (
                        <li className="m-px" key={gundam.id}>
                            <div className="box-product-bottom w-72">
                                <div className="box-product h-72">
                                    <img className="w-48" src={gundam.image} alt={gundam.name} />
                                </div>

                            </div>
                            <div className="shadow-sm rounded m-1">
                                <div className="flex flex-col items-center">
                                    <h4 className="font-bold">{gundam.name}</h4>
                                    <p>{gundam.price}€</p>
                                </div>
                                <div className="boutiqueButton">
                                    <Link to={URL_DETAIL}>
                                        <button><img src={view} alt="" /></button>
                                    </Link>
                                    <Link to={URL_PANIER}>
                                        <button><img className="w-8" src={cart} alt="" /></button>
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
