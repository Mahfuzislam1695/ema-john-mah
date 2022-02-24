import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user, token } = useAuth();
    

    useEffect(() => {
        const url =`https://blooming-bastion-94256.herokuapp.com/orders?email=${user.email}`
         fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
         })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [token ,user.email]);

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >{order.name} : {order.email}</li>)}
            </ul>
        </div>
    );
};

export default Orders;