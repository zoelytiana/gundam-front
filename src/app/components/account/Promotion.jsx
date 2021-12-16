import React from 'react'
import { Link } from 'react-router-dom'
import { URL_DETAIL, URL_PANIER } from './../../shared/constants/urls/urlConstants';
import cart from "./../../assets/images/cart.png";
// import view from "./../../assets/images/view.png";
// import gundamHome from "./../../assets/images/gundamHome.jpg";

function Promotion(props) {
    return (
        <div className="promotions">
            
            <h3 className="homeCardTitle"><span className="homeCardTitleSpan uppercase">Promotions</span></h3>
            <ul className="lg:flex">
                {props.gundams.map(gundam => {
                    return (
                        <li className="m-6" key={gundam.id}>
                            <div className="box-product-bottom w-72">
                                <div className="box-product h-72">
                                    <img className="w-48" src={gundam.image} alt={gundam.name} />
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-1 rounded mt-2 p-2">
                                <div className="flex flex-col items-center">

                                    <h4 className="font-bold">{gundam.name}</h4>
                                    <h4>{gundam.price}€</h4>
                                </div>
                                <div className="flex justify-end items-center">
                                    <Link className="ml-1" to={URL_DETAIL}>
                                        <button><img className="w-6 h-6" alt="" /></button>
                                    </Link>
                                    <Link className="ml-2" to={URL_PANIER}>
                                        <button><img className="w-6 h-6" alt="" /></button>
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

export default Promotion
