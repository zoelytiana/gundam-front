import React from 'react';
import PanierItem from "../components/boutique/PanierItem"

const PanierView = () => {

    const gundamArray = JSON.parse(localStorage.getItem('Cart'));
    console.log("gundamArray", gundamArray)

    return (
        <div className="container">
            <div>
                <h3>Mon Panier</h3>
            {gundamArray !== null ?<PanierItem gundams={gundamArray}/> : <div className=" my-40 max-w-screen-xl mx-auto">Panier vide</div>}
            </div>
        </div>
    )
}

export default PanierView

