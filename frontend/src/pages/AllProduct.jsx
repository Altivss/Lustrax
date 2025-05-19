import React from 'react';
import { products } from '../assets/assets'; // Update this path as needed
import { Link } from 'react-router-dom';

const AllProduct = () => {
  // Group products by category
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="bg-black text-white px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10">ALL PRODUCTS</h1>

      {categories.map(category => (
        <div key={category} className="mb-10">
          <h2 className="text-yellow-400 text-lg font-semibold mb-4">{category.toUpperCase()}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <Link key={product._id} to={`/products/${product._id}`} className="text-center cursor-pointer">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <p className="text-sm">{product.name}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
