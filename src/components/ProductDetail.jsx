import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(console.error);
    }, [id]);

    if (!product) return <p className="text-center mt-10 text-blue-500 animate-pulse">Loading product...</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6 rounded-xl flex flex-col md:flex-row items-center gap-8">
            <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/2 rounded-xl shadow" />
            <div>
                <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">${product.price}</h3>
                <button onClick={() => dispatch(addToCart(product))} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded hover:opacity-90 transition">Add to Cart</button>
            </div>
        </div>
    );
}