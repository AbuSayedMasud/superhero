// import unit
import React from 'react';
import './Cart.css'
// import unit

// cart function
const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;

    let names = [];
    let i = 0;
    for (const unit of cart) {
        total = total + unit.salary;

        names[i] = unit.name;
        i++;
    }


    return (
        <div className="cart">

            <h5><span className="length">Choosen Number Of Officer </span>:{cart.length}</h5>
            <p><span className="length">Total</span>: {total}</p>
            {
                names.map(name => <li className="list-data">{name}</li>)
            }




        </div>

    );
};

export default Cart;