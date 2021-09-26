//import unit
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Unit.css'
//import unit

// unit fuction
const Unit = (props) => {
    const { name, img, salary, rank, from, age } = props.unit
    const element = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

    return (
        <div className="unit">
            <div className="unit-img">
                <img src={img} alt="" />
            </div>
            <div className="unit-text">
                <h4> Name : <small>{name}</small></h4>
                <h4> Join From  :<small>{from}</small></h4>
                <h4>Rank : <small>{rank}</small></h4>
                <h4>Age : <small>{age}</small></h4>
                <h4>Salary : <small> {salary}</small></h4>
                <button onClick={() => props.handleAddToCart(props.unit)} className="btn-addCart" >{element} add to cart</button>
            </div>



        </div>

    );
};

export default Unit;