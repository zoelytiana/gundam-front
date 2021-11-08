import React from "react";


const BtnPaiement = ()=>{

        return(
            <div>
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
        )
    }


export default BtnPaiement;