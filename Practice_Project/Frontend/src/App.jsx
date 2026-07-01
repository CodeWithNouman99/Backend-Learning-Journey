import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"
import { ShoppingBag, Package } from "lucide-react";
const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        console.log(response)
        setProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <nav className="bg-green-200 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingBag size={28} className="text-green-900" />
          <h4 className="text-xl font-bold text-green-900">
            MyStore
          </h4>
        </div>

        <button className="bg-green-900 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-green-800 transition">
          <Package size={20} />
          All Products
        </button>
      </nav>

      <h1 className='text-2xl ml-3 mt-4 font-bold'>Featured Products</h1>
      <p className='text-xl font-semibold mt-3 ml-4'> Total Products:{products.length}</p>


      {/* for data */}
      {/* for data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden
                 hover:border-gray-300 hover:shadow-md transition-all duration-200"
          >
            <div className="relative overflow-hidden bg-gray-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                {product.category}
              </span>

              <h2 className="text-base font-semibold text-gray-900 mt-1.5 leading-snug">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                <button
                  className="text-sm font-medium text-teal-700 hover:text-teal-800
                       transition-colors"
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App









