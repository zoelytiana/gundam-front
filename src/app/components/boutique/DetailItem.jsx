import React from 'react';
import classes from "./DetailItem.module.css";

const DetailItem = (props) => {
    return (
        <div className={classes.detailContainer}>
            <div className={classes.detail}>
                <img src="https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg" alt="Gundam RX-78-2" />

                <div className={classes.detailInfos}>
                    <h1>Gundam RX-78-2</h1>
                    <p>79€</p>
                    <p>coeur</p>
                    <div className={classes.detailNote}>
                        <div><p>stock</p></div>
                        <div><p>notation</p></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur commodi numquam quis id sunt totam labore enim laboriosam. Ex at pariatur velit incidunt nulla maxime sit rerum impedit consectetur!</p>
                    <button>Ajouter au panier</button>
                </div>
            </div>
            <div className={classes.description}>
                <h3>Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellat ullam cum vitae consequatur laudantium similique ipsum praesentium totam soluta sapiente debitis, unde explicabo nemo dolore nostrum perspiciatis, provident quo.</p>
            </div>

            <div className={classes.otherImage}>
                {props.gundams.map(gundam => {
                    return <img src={gundam.image} alt={gundam.name} />
                })}
            </div>
            <div className={classes.similarProduct}>
                {props.gundams.map(gundam => {
                    return <img src={gundam.image} alt={gundam.name} />
                })}
            </div>

        </div>
    )
}

export default DetailItem
