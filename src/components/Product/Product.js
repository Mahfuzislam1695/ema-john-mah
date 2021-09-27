import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4> <Link to ={'/product/'+key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} Left in stock- Order soon</small></p>
                
                {props.showAddToCard  && <button 
                    className="main-button" 
                    onClick={ () => props.handleAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart} /> add to card
                     </button>}
            </div>

        </div>
    );
};

export default Product;