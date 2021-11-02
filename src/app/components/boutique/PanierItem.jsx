import React from 'react';
import classes from "./PanierItem.module.css"

function PanierItem(props) {
    return (
        <div>
            <h3>Mon panier ( 3 articles )</h3>
            <div className="flex">
                <div>
                    {props.gundams.map(gundam => {
                        return (
                            <div className="flex bg-white rounded p-1 my-11">
                                <img src={gundam.image} alt={gundam.name} />
                                <div className="p-0.5">
                                    <h4>{gundam.name}</h4>
                                    <p>{gundam.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="bg-white rounded p-1 mb-11">
                    <p className={classes.freeDelivery}>Pour tout commande supérieur à 150€, vous pouvez bénéficier de la livraison gratuite</p>
                    <p>Total</p>
                    <div>
                        <p>Sous total</p>
                        <p>450€</p>
                    </div>
                    <div>
                        <p>livraison</p>
                        <p>0€</p>
                    </div>
                    <hr />
                    <div>
                        <p>Total TVA incluse</p>
                        <p>450€</p>
                    </div>
                    <button className="btn-form"><p className="btn-form-text">Procéder au paiment</p></button>
                    <button className="btn-form"><p className="btn-form-text">Continuer mes achats</p></button>
                </div>
            </div>
            <button>Instruction de livraison</button>
            <div className={classes.PaiementInfos}>
                <h3 className={classes.accept}>
                    Nous acceptons
                </h3>
                <div className={classes.PaiementMode}>
                    <p>visa</p>
                    <p>PayPal</p>
                    <p>Mastercard</p>
                </div>
                <h3>Vous avez un compte Amazon ?</h3>
                <p>Connectez-vous avec votre compte amazon et essayer la commande Express</p>
                <button className={classes.amazon}>amazon pay</button>
                <p>Utilisez cotre compte amazon</p>
            </div>
        </div>
    )
}

export default PanierItem
