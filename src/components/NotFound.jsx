import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100">
            <h2 className="text-5xl font-bold text-pink-600">404</h2>
            <p className="text-lg mt-2 text-gray-600">Page Not Found</p>
        </div>
    );
}