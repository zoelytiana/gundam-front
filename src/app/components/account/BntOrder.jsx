import React from "react";


const BtnOrder = ()=>{

        return(
            <div className='flex'>
                <div className='w-full my-2 text-center'>
                    <button className='btn-form'>
                            <div className='btn-form-text'>MES COMMANDES</div>
                    </button>
                </div>

                <div className='w-full my-2 text-center'>
                    <button className='btn-form'>
                        <div className='btn-form-text'>ANNULER LA COMMANDE</div>
                    </button>
                </div>
            </div>
        )
    }


export default BtnOrder;