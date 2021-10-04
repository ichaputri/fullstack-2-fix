import React from 'react';
import './Product.css';
import { Link  } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
        <img 
            src="https://i.pinimg.com/originals/17/5b/a6/175ba6364ba313eb5a2f6438726207a2.jpg " 
            alt="product name" 
        />
            <div className="product__info">
                <p className="info__name">Figure Anime Roronoa Zoro</p>
                <p className="info__description">
                    Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana
                </p>
                <p className="info__price">rp.990000</p>
                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product;