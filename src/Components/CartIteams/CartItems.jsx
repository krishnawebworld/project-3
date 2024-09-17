import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Calculate subtotal by iterating over all products in the cart
    const calculateSubtotal = () => {
        let subtotal = 0;
        all_product.forEach((product) => {
            if (cartItems[product.id] > 0) {
                subtotal += product.new_price * cartItems[product.id];
            }
        });
        return subtotal.toFixed(2);
    };

    const subtotal = calculateSubtotal();
    const shippingFee = subtotal > 0 ? 0 : 0; // Placeholder for shipping fee logic
    const total = (parseFloat(subtotal) + shippingFee).toFixed(2);

    return (
        <div className='cartitems'>
            {/* Cart header */}
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {/* Cart products */}
            {
                all_product.map((product) => {
                    if (cartItems[product.id] && cartItems[product.id] > 0) {
                        return (
                            <div key={product.id} className='cartitems-format'>
                                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <img
                                    src={remove_icon}
                                    alt="Remove icon"
                                    className='cartitems-remove-icon'
                                    onClick={() => removeFromCart(product.id)}
                                />
                            </div>
                        );
                    }
                    return null;
                })
            }

            {/* Cart totals and promo code */}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>{shippingFee === 0 ? 'Free' : `$${shippingFee}`}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${total}</h3>
                    </div>
                </div>
                <button className="cartitems-checkout-button">Proceed to Checkout</button>
            </div>

            <div className="cartitems-promocode">
                <p>If you have a promo code, enter it here:</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
