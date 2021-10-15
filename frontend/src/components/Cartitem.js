import React from 'react';
import "./Cartitem.css";
import { Link } from "react-router-dom";

const Cartitem = () => {
    return(
        <div className="cartitem"> 
            <div className="cartitem__image">
                <img src = "https://i.pinimg.com/originals/17/5b/a6/175ba6364ba313eb5a2f6438726207a2.jpg" 
                    alt="Product Item"/>
            </div>
            <Link to = {`/product/$(111)`} className="cartitem__name">
                <p>Product 1</p>
            </Link>

            <p className="cartitem__price">$99.99</p>
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <button className="cartitem__deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Cartitem;