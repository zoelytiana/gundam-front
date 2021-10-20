import React from 'react'

/**
* @author Michael Helinckx
*/


const PaiementView = () => {
    return (
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto">
                <h1>Paiement sécurisé</h1>

                <h2>Notre paiement sécurisé par carte bancaire</h2>
                <p>Notre système de paiement vous propose la sécurité SSL par l'intermédiaire de Payplug. Vous pouvez ainsi réaliser vos paiement en toute sécurité avec votre carte bleue, Mastercard, Maestro et Visa.</p> 

                <p>Pour les résidents français titulaires d'une carte bancaire française Visa ou MasterCard. Oney est un crédit avec frais remboursable en 3 ou 4 fois. Il fonctionne dès 100€ et peut aller jusqu'à 3 000€.</p> 

                <p>Découvrez les conditions générales d'utilisation de ONEY en bas de page. </p> 

                <h2>Avec Paypal</h2>
                <p>DeriveFigurine propose également la solution de paiement par l'intermédiaire de Paypal. Si vous ne possédez pas de compte paypal, il est possible d'utiliser Paypal pour régler vos achats en carte bancaire.</p> 

                <h2>Par virement bancaire</h2>
                <p>Lors de la validation de votre commande, nos informations bancaires vous seront transmises. Il vous suffit ainsi d'effectuer le virement. A noter que le traitement de votre commande est plus long par ce moyen de paiement puisque vos produits seront expédiés seulement après la réception de votre paiement.</p> 

                <h2>Par chèque</h2>
                <p>Lors de la validation de votre commande, vous devrez envoyer un chèque à cette adresse :</p> 

                <p>Derive Figurine Mistral Alexandre
                83E Chemin des estimeurs sud
                84600 Valréas</p>

                <p>A noter que le traitement de votre commande est plus long par ce moyen de paiement puisque nous n'expédierons votre commande que lorsque nous aurons reçus et déposé le chèque en banque. La commande sera expédiée seulement après encaissement du paiement.</p>
            </div>
        </div>
    );
};

export default PaiementView;