import React from 'react';
import Promotion from '../components/account/Promotion';
import NewProduct from '../components/account/NewProduct';
import BestSeller from '../components/account/BestSeller';

const gundamArray = [
    {
        id: 1,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 100,
    },
    {
        id: 2,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 45,
    },
    {
        id: 3,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 79,
    },
]

const HomeView = () => {
    return (
        <div className="container">

            <Promotion gundams={gundamArray}/>
            <NewProduct gundams={gundamArray}/>
            <BestSeller gundams={gundamArray}/>
            {/* <div className="max-w-7xl px-4 mx-auto">
                <div className="btn-form">
                    <button><div className="btn-form-text">HOME</div></button>
                </div>
                <input className="input" type="text" id="name" placeholder="Test Input Style" />
                <input className="input-error" type="text" id="name" placeholder="Test Input Style" />
                <div>
                    <input className="checkbox" type="checkbox" id="scales" name="scales" />

                    <label for="scales">Scales</label>
                </div>
                <div className="box-product-bottom">
                    <div className="box-product">
                        <img src="https://img.gaming.gentside.com/article/gundam/figurine-zgmf-x10a-freedom-gundam-171625-de-bandai-hobby_15217190da05576a7ea2c0093582f87ff78d72cf.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HomeView
