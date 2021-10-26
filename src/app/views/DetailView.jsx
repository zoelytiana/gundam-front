import React from 'react';
import DetailItem from '../components/boutique/DetailItem';

const DetailView = () => {
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
        
    ]
    return (
        <div className="container">
            <DetailItem gundams={gundamArray}/>
        </div>
    )
}

export default DetailView
