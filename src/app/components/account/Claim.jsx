import React from "react";

const Claim = ({ titre, desc }) => {

    if (titre) {
        return ( 
        <div>
            <p> { titre } </p>   
            <p> { desc } </p>  
        </div>
        )
    }

}

export default Claim;