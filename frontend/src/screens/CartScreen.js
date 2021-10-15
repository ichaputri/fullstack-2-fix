import './CartScreen.css';

//components
import Cartitem from '../components/Cartitem';

const CartScreen = () => {
    return(
        <div className = "cartscreen">
            <div className="cartscreen__left">
                <h2>Your Cart</h2>

                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>Sub Total (0) items</p>
                        <p>$99.99</p>
                    </div>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;