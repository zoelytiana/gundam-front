import React from 'react';
import classes from "./DetailItem.module.css";
import { Link } from 'react-router-dom';
import { URL_PANIER } from './../../shared/constants/urls/urlConstants';

const DetailItem = (props) => {
    return (
        <div className="flex flex-col items-center my-11">
            <div className="flex justify-around">
                <img className={classes.detailImg} src="https://static.fnac-static.com/multimedia/Images/FR/MC/74/eb/e1/14805876/1540-1/tsp20151016173224/Mobile-Suit-Gundam-figurine-Model-Kit-Real-Grade-RX-78-2-Gundam-13-cm.jpg" alt="Gundam RX-78-2" />

                <div className={classes.detailInfos}>
                    <h1>Gundam RX-78-2</h1>
                    <p>79€</p>
                    <p>coeur</p>
                    <div className="flex">
                        <div className="btn-form" >
                            <p className="btn-form-text">En stock</p>
                        </div>
                        <div><p>notation</p></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur commodi numquam quis id sunt totam labore enim laboriosam. Ex at pariatur velit incidunt nulla maxime sit rerum impedit consectetur!</p>
                    <Link to={URL_PANIER}>
                        <button className="btn-form"><p className="btn-form-text">Ajouter au panier</p></button>
                    </Link>
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
            <h2>Produits similaire</h2>
            <div className={classes.similarProduct}>
                {props.gundams.slice(0, 3).map(gundam => {
                    return <img src={gundam.image} alt={gundam.name} />
                })}
            </div>

        </div>
    )
}

export default DetailItem
