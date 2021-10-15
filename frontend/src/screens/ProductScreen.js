import './ProductScreen.css';

const ProductScreen = () => {
    return(
        <div className = "productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://i.pinimg.com/originals/17/5b/a6/175ba6364ba313eb5a2f6438726207a2.jpg" 
                    alt="Product Name"/>
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $99.99</p>
                    <p>Description: Icha dewi putriana Icha dewi putriana Icha dewi putriana Icha dewi putriana </p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$99.9</span>
                    </p>
                    <p>
                        Status: <span>In Stock </span>
                    </p>
                    <p>
                        Qty 
                        <select>
                            <option value = "1"> 1</option>
                            <option value = "2"> 2</option>
                            <option value = "3"> 3</option>
                            <option value = "4"> 4</option>
                            <option value = "5"> 5</option>
                            <option value = "6"> 6</option> 
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;