import React from 'react';

const Products = () => {
  // Sample product data (10 products)
  const products = [
    { id: 1, name: 'Product 1', price: '$29.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 2, name: 'Product 2', price: '$49.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 3, name: 'Product 3', price: '$19.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 4, name: 'Product 4', price: '$99.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 5, name: 'Product 5', price: '$59.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 6, name: 'Product 6', price: '$89.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 7, name: 'Product 7', price: '$39.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 8, name: 'Product 8', price: '$69.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 9, name: 'Product 9', price: '$79.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
    { id: 10, name: 'Product 10', price: '$109.99', image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-6">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-green-500 mt-2">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
