import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-3xl font-bold">🛍️ ShoppyGlobe</h1>
            <nav className="space-x-6 text-lg relative">
                <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
                <Link to="/cart" className="hover:text-yellow-300 transition duration-300 relative flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Cart
                    {totalQuantity > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {totalQuantity}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
}