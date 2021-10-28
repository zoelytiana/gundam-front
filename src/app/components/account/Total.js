import React from "react";


const Total = ()=>{

        return(
            <div>
                <div className='info'></div>
                            <div>
                                <h4>Total : </h4>
                                <p>Sous total :</p>
                                <p>Livraison :</p>
                                <hr/>
                                <p>Total TVA inclus :</p>
                                    <div className='w-full my-2 text-center'>
                                        <button className='btn-form'>
                                            <div className='btn-form-text'>PROCEDER AU PAIEMENT</div>
                                        </button>
                                    </div>

                                    <div className='w-full my-2 text-center'>
                                        <button className='btn-form'>
                                            <div className='btn-form-text'>CONTINUER MES ACHATS</div>
                                        </button>
                                    </div>
                            </div>

            </div>
        )
    }


export default Total;