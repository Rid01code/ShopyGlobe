import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductList() {
    useFetchProducts();
    const { list, status, error } = useSelector(state => state.products);
    const [query, setQuery] = useState('');

    const filtered = list.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );

    if (status === 'loading') return <p className="text-center mt-10 text-blue-500 animate-pulse">Loading products...</p>;
    if (status === 'failed') return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

    return (
        <section className="p-6 bg-gradient-to-b from-white to-blue-50 min-h-screen">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full max-w-lg mx-auto block px-4 py-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}