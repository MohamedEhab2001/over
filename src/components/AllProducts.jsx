import React from 'react'
import Header from './e-commerce/Header'
import CopyRightThree from './footer/CopyRightThree'

export default function AllProducts() {
    // Dummy product data for demonstration
    const products = [
        { id: 1, image: 'https://via.placeholder.com/150', title: 'Product 1', price: 29.99 },
        { id: 2, image: 'https://via.placeholder.com/150', title: 'Product 2', price: 39.99 },
        { id: 3, image: 'https://via.placeholder.com/150', title: 'Product 3', price: 49.99 },
        { id: 4, image: 'https://via.placeholder.com/150', title: 'Product 4', price: 59.99 },
        { id: 5, image: 'https://via.placeholder.com/150', title: 'Product 5', price: 69.99 },
        { id: 6, image: 'https://via.placeholder.com/150', title: 'Product 6', price: 79.99 },
    ];

    return (
        <div>
            <Header />



            <footer className="theme-footer-seven mt-120 md-mt-100">
                <div className="lg-container">
                    <div className="container">
                        <div className="bottom-footer">
                            <CopyRightThree />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
