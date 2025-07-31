import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

export default function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert(`${product.title} added to cart!`);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-pink-600 font-bold mb-2">${product.price}</p>
            <div className="flex justify-between">
                <button onClick={handleAddToCart} className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Add to Cart</button>
                <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View</Link>
            </div>
        </div>
    );
}
