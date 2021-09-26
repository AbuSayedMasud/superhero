
// import unit
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Unit from '../Unit/Unit';
import './CreateUnit.css'
// import unit
// create funtion unit
const CreateUnit = () => {
    const [units, setUnits] = useState([]);
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => setUnits(data))
    }, [])
    const [cart, setCart] = useState([])
    const handleAddToCart = (unit) => {
        const newCart = [...cart, unit];
        setCart(newCart);
        
    }
    return (
        <div className="create-units">
            <div className="units">
                <div className="unit-container ">

                    {
                        units.map(unit => <Unit unit={unit} key={unit.id} handleAddToCart={handleAddToCart}></Unit>)
                    }
                </div>
            </div>
            <div className="cart-container">
    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default CreateUnit;