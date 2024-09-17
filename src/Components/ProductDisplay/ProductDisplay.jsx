import React, { useContext } from 'react';
import './productDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const{addToCart} = useContext(ShopContext)

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                {[...Array(4)].map((_, index) => (
                    <img
                        key={index}
                        src={product.image}
                        alt={`Thumbnail ${index + 1}`}
                        className="productdisplay-thumbnail"
                    />
                ))}
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt={`${product.name} main`} />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-star">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={star_icon} alt="Star" />
                    ))}
                    <img src={star_dull_icon} alt="Dull star" />
                    <p>{122} reviews</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt with a close-fitting round neckline and short sleeves. It can be worn as an undershirt or outer garment.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-size-options">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                            <div key={index} className="productdisplay-size-option">
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button className="add-to-cart-button" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <p className="productdisplay-right-category">
                    <span>Category:</span> Women, T-shirt
                </p>

                <p className="productdisplay-right-tags">
                    <span>Tags:</span> Modern
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
