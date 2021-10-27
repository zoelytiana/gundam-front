import React from 'react';
import PanierItem from "../components/boutique/PanierItem"

const PanierView = () => {
    const gundamArray = [
        {
            id: 1,
            image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
            name: "Gundam RX-78-2",
            price: 100,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur commodi numquam quis id sunt totam labore enim laboriosam. Ex at pariatur velit incidunt nulla maxime sit rerum impedit consectetur!"
        },
        {
            id: 2,
            image: "https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg",
            name: "Gundam RX-78-2",
            price: 45,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur commodi numquam quis id sunt totam labore enim laboriosam. Ex at pariatur velit incidunt nulla maxime sit rerum impedit consectetur!"
        },

    ]
    return (
        <div className="container">
            <PanierItem gundams={gundamArray}/>
        </div>
    )
}

export default PanierView

