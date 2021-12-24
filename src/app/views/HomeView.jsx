import React from 'react';
import Promotion from '../components/boutique/Promotion';
import NewProduct from '../components/boutique/NewProduct';
import BestSeller from '../components/boutique/BestSeller';
import Bas_remove from '../components/account/Bas_remove'

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
        <div>

            <Promotion gundams={gundamArray}/>
            <NewProduct gundams={gundamArray}/>
            <BestSeller gundams={gundamArray}/>
            <Bas_remove/>
        </div>
    )
}

export default HomeView
