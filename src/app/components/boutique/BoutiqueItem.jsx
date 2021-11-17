import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import view from "./../../assets/images/view.png";
import cart from "./../../assets/images/cart.png";

function boutiqueItem(props) {
    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-3">
                {props.gundams.slice(0, 9).map(gundam => {
                    return (
                        <li className="m-4" key={gundam.id}>
                            <div className="box-product-bottom w-72">
                                <div className="box-product h-72">
                                    <img className="w-48" src={gundam.image} alt={gundam.name} />
                                </div>

                            </div>
                            <div className="shadow-sm rounded m-1 mt-2 p-2">
                                <div className="flex flex-col items-center">
                                    <h4 className="font-bold">{gundam.name}</h4>
                                    <p>{gundam.price}€</p>
                                </div>
                                <div className="flex justify-end items-center">
                                    <Link className="ml-1" to={URL_DETAIL}>
                                        <button><img className="w-6 h-6" src={view} alt="" /></button>
                                    </Link>
                                    <Link className="ml-2" to={URL_PANIER}>
                                        <button><img className="w-6 h-6" src={cart} alt="" /></button>
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
