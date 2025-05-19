import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/assets'; // adjust path if needed

const Products = () => {
  const { id } = useParams();
  const product = products.find(p => p._id === id); // Find product by ID
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return <div className="text-white p-6">Product not found.</div>;

  return (
    <div className="text-white bg-black px-4 py-10 max-w-7xl mx-auto">
      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Main Image */}
        <div>
          <img
            src={product.image[selectedImageIndex]}
            alt={product.name}
            className="w-full rounded"
          />
          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`rounded cursor-pointer ${i === selectedImageIndex ? 'ring-2 ring-yellow-400' : ''}`}
                onClick={() => setSelectedImageIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-400">{product.category}</p>
          <p className="text-2xl mt-2">Php {product.price.toLocaleString()}.00</p>
          <p className="text-white mt-1"> <span className='text-green-500 !text-green-500'>✔</span>  Item is in stock</p>

          <div className="mt-4">
            <label className="block mb-2 text-gray-300">SIZE</label>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-gray-300">FOR ORDERS</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/autobeautification1" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">FACEBOOK</a>
              <a href="https://shopee.ph/lustrax?entryPoint=ShopBySearch&searchKeyword=lustrax" className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">SHOPEE</a>
              <a href="https://www.tiktok.com/@lustrax_ph?_r=1&_d=secCgYIASAHKAESPgo8IvAU6Dt56cKleUqeWODzTSYJaRAnk5A5uzz7WgIUNLaRLwXEO6Dvm6dVacyHWA0XWT29gak6CJMG7oSnGgA%3D&_svg=1&checksum=17f6ad060d45b0bc880092c2654e4763ab3187c043f70a3f7101dbc810c3e468&sec_uid=MS4wLjABAAAAXQPCL3I91Cqe_yafPpku6PxOp1Yvd6xio-HiTyCLmgUX9Os0Ni4K5uTeTlrWPz4T&sec_user_id=MS4wLjABAAAAMQzrX9V4zzp8Ll_Ptg81UtCijXN8rogiodbmhZXR0dz1b79banNsQEs6QWDe_v0S&share_app_id=1180&share_author_id=7433359116988875777&share_link_id=139b39fb-4715-4139-8697-d80a7dda56c5&sharer_language=en&social_share_type=5&source=h5_t&timestamp=1747386407&u_code=dd67iihfm14dd4&ug_btm=b6880%2Cb2878&ugbiz_name=ACCOUNT&user_id=6843403557506466818" className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">TIKTOK</a>
            </div>
          </div>
               <p className="text-gray-400 mt-6 text-justify">{product.description}</p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">RELATED PRODUCTS</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products
            .filter(p => p._id !== product._id && p.category === product.category)
            .slice(0, 5)
            .map(p => (
              <div key={p._id} className="text-center">
                <img
                  src={p.image[0]}
                  alt={p.name}
                  className="w-full rounded mb-2"
                />
                <p>{p.name}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
