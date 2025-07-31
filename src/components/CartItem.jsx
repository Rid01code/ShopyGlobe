import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded object-cover" />
            <div className="flex-1">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">Price: ${item.price} × {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">Remove</button>
        </div>
    );
}