import React from 'react';
import { Link } from 'react-router-dom';
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import view from "./../../assets/images/view.png";
import cart from "./../../assets/images/cart.png";

function boutiqueItem(props) {
    if(props.loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="flex justify-center my-40">
            <ul className="grid grid-cols-3">
                {props.gundams.map(gundam => {
                    return (
                        <li className="m-4" key={gundam._id}>
                            <div className="box-product-bottom w-72">
                                <div className="box-product h-72 flex justify-center items-center">
                                    <img className="w-48 h-48" src={gundam.productPic} alt={gundam.productName} />
                                </div>

                            </div>
                            <div className="shadow-sm rounded m-1 mt-2 p-2">
                                <div className="flex flex-col items-center">
                                    <h4 className="font-bold">{gundam.productName}</h4>
                                    <p>{gundam.productPrice}€</p>
                                </div>
                                <div className="flex justify-end items-center">
                                    <Link className="ml-1" to={URL_DETAIL + `/${gundam.id}`}>
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
