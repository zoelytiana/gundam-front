import React from 'react';
import PanierItem from "../components/boutique/PanierItem"

const PanierView = () => {

    const gundamArray = JSON.parse(localStorage.getItem('Cart'));
    console.log("gundamArray", gundamArray)

    return (
        <div className="container">
            <div>
            <PanierItem gundams={gundamArray}/>
            </div>
        </div>
    )
}

export default PanierView

