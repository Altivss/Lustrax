import React, { useState } from 'react';

export default function AddProduct() {
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [unit, setUnit] = useState('ml');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.slice(0, 5));
  };

  const handleUpload = () => {
    // Logic to upload product
    console.log({ images, productName, price, description, category, size, unit });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex bg-black text-white p-4 justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <span className="text-yellow-400 font-bold text-xl">LUSTRAX</span>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">LOG OUT</button>
      </div>

      <div className="flex">
        <div className="w-1/5 bg-black text-white p-4 space-y-4">
          <div className="text-yellow-400 font-semibold">Add Products</div>
          <div>Product Catalogue</div>
          <div>Job Postings</div>
        </div>

        <div className="w-4/5 bg-gray-900 text-white p-6">
          <h2 className="text-xl mb-4">Upload Image</h2>
          <div className="flex space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-800 border border-gray-700 flex items-center justify-center">
                {images[i] ? <img src={URL.createObjectURL(images[i])} alt="" className="h-full w-full object-cover" /> : <span>📷</span>}
              </div>
            ))}
          </div>
          <input type="file" multiple onChange={handleImageUpload} className="hidden" id="imageUpload" />
          <label htmlFor="imageUpload" className="bg-yellow-400 text-black px-4 py-2 inline-block cursor-pointer mb-6">Browse</label>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Product Name</label>
              <input className="w-full p-2 mt-1 text-black" value={productName} onChange={e => setProductName(e.target.value)} />
            </div>
            <div>
              <label>Price</label>
              <input type="number" className="w-full p-2 mt-1 text-black" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="col-span-2">
              <label>Product Description</label>
              <textarea className="w-full p-2 mt-1 h-32 text-black" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
              <label>Product Category</label>
              <select className="w-full p-2 mt-1 text-black" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <div>
                <label>Product Size</label>
                <input type="number" className="p-2 mt-1 text-black w-24" value={size} onChange={e => setSize(e.target.value)} />
              </div>
              <div>
                <label>&nbsp;</label>
                <select className="p-2 mt-1 text-black" value={unit} onChange={e => setUnit(e.target.value)}>
                  <option value="ml">ml</option>
                  <option value="g">g</option>
                </select>
              </div>
            </div>
          </div>

          <button onClick={handleUpload} className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded">Upload</button>
        </div>
      </div>
    </div>
  );
} 
