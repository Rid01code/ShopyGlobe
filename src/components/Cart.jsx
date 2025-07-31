import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
    const items = useSelector(state => state.cart.items);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="p-6 min-h-screen bg-gradient-to-b from-pink-50 to-blue-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
            {items.length === 0 ? (
                <p className="text-center text-gray-500">Cart is empty.</p>
            ) : (
                <>
                    <div className="grid gap-4">
                        {items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <h3 className="text-2xl text-right mt-6">Total: <span className="text-pink-600 font-bold">${total.toFixed(2)}</span></h3>
                </>
            )}
        </section>
    );
}