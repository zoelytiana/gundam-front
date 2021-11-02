import React from 'react';
import AsideFilter from '../components/boutique/AsideFilter';
import BoutiqueItem from '../components/boutique/BoutiqueItem';

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
    {
        id: 4,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 100,
    },
    {
        id: 5,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 45,
    },
    {
        id: 6,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 79,
    },
    {
        id: 7,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 100,
    },
    {
        id: 8,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 45,
    }, {
        id: 9,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 79,
    },
    {
        id: 10,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 100,
    },
    {
        id: 11,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 45,
    }, {
        id: 12,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
        name: "Gundam RX-78-2",
        price: 79,
    },

]

const BoutiqueView = () => {
    return (
        <div className="container">
            <div className="flex">
                {/* <AsideFilter /> */}
                <BoutiqueItem gundams={gundamArray} />
            </div>
        </div>
    )
}

export default BoutiqueView

