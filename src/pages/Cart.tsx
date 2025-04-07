// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function Cart() {
//   const { items, removeFromCart, updateQuantity, total } = useCart();

//   if (items.length === 0) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//           <Link
//             to="/menu"
//             className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//           >
//             Continue Shopping
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           {items.map((item) => (
//             <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover rounded-md"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">${item.price}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:text-red-600"
//               >
//                 <Trash2 className="w-5 h-5" />
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <div className="space-y-2 mb-4">
//             {items.map((item) => (
//               <div key={item.id} className="flex justify-between text-sm">
//                 <span>{item.name} x {item.quantity}</span>
//                 <span>${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//           </div>
//           <div className="border-t pt-4">
//             <div className="flex justify-between font-semibold">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
//           <button
//             className="w-full mt-6 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
//             onClick={() => {/* Payment integration will be added later */}}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link
            to="/menu"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            className="w-full mt-6 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
