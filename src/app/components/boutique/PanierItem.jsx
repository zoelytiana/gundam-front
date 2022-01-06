import React from 'react';
import visa from "./../../assets/images/mode-de-paiement_0000_Calque3.jpg";
import paypal from "./../../assets/images/mode-de-paiement_0001_Calque2.jpg";
import mastercard from "./../../assets/images/mode-de-paiement_0002_Calque1.jpg";
import info from "./../../assets/images/icon_info.png";

function PanierItem(props) {
    console.log("prop gundamArray", props.gundams)
    let ssTotal = 0
    let total = 0
    let livraison = 20
    let tva = 0
    return (
        <div className=" my-40 max-w-screen-xl mx-auto">
            <h3>Mon panier a ( {props.gundams.length} ) produit(s)</h3>
            <div className="lg:flex justify-around">
                <div>
                    {props.gundams.map((gundam, index) => {
                       
                        ssTotal = ssTotal + parseFloat(gundam.productPrice)
                        tva = ssTotal * 0.20
                        if (ssTotal>150) livraison = 0
                        console.log('ssTotal',ssTotal)
                        return (
                            <div className="xl:flex lg:justify-center lg:items-center bg-white rounded p-8 m-11">
                                <div key={index} className="p-0.5">
                                    <p>Produit {index+1} : {gundam.id}</p>
                                    <h4>{gundam.productName}titre</h4>
                                    <p>{gundam.productPrice}</p>
                                </div>
                            </div>
                        )  
                    })}
                    
                </div>
                <div className="bg-white rounded p-8 m-11">
                    <p className="bg-primary-200 p-8">Pour tout commande supérieur à 150€, vous pouvez bénéficier de la livraison gratuite</p>
                    <h3 className="mt-4 mb-4">Total</h3>
                    <div className="flex justify-between mb-8">
                        <p>Sous total</p>
                        <p>{ssTotal} €</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Livraison :</p>
                        <p>{livraison} €</p>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-4">
                        <p>Total TVA incluse </p>
                        <p>{ssTotal + tva} €</p>
                    </div>
                    <div className="flex px-20 w-full">
                        <button className="btn-form m-4">
                            <p className="btn-form-text w-28">Procéder au paiement</p>
                        </button>
                        <button className="btn-form m-4">
                            <p className="btn-form-text w-28">Continuer mes achats</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex ml-8">
                <img className="mr-2" src={info} alt="info" />
                <button><h3>Instruction de livraison</h3></button>
            </div>

            <div className="text-center lg:mx-40">
                <h3 className="mb-4">
                    Nous acceptons
                </h3>
                <div className="flex justify-center bg-white p-8">
                    <img src={visa} alt="visa" />
                    <img src={paypal} alt="paypal" />
                    <img src={mastercard} alt="mastercard" />
                </div>
                <div className="bg-white mt-4 p-8">
                    <h3>Vous avez un compte Amazon ?</h3>
                    <p>Connectez-vous avec votre compte amazon et essayer la commande Express</p>
                    <button className="bg-primary-300 border-solid border-2 border-black rounded pr-4 pl-4">amazon pay</button>
                    <p>Utilisez cotre compte amazon</p>
                </div>
            </div>
        </div>
    )
}

export default PanierItem
