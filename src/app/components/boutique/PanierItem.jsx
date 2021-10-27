import React from 'react';
import classes from "./PanierItem.module.css"

function PanierItem(props) {
    return (
        <div>
            <p className={classes.panierTitle}>Mon panier ( 3 articles )</p>
            <div className={classes.recapOrder}>
                <div>
                    {props.gundams.map(gundam => {
                        return (
                            <div className={classes.productList}>
                                <img src={gundam.image} alt={gundam.name} />
                                <div className={classes.productListInfos}>
                                    <h1>{gundam.name}</h1>
                                    <p>{gundam.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.recapPrice}>
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
                    <button>Procéder au paiment</button>
                    <button>Continuer mes achats</button>
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
