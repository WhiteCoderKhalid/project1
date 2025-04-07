// import React, { useState } from 'react';
// import { MenuItem } from '../types';
// import { useCart } from '../context/CartContext';
// import { motion } from 'framer-motion';
// import { menuItems } from '../data/menuItems';

// const categories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Desserts', 'Drinks', 'Salads'];

// export default function Menu() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const { addToCart } = useCart();
//   const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

//   const filteredItems = selectedCategory === 'All'
//     ? menuItems
//     : menuItems.filter(item => item.category === selectedCategory);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h1>
      
//       {/* Categories */}
//       <div className="flex overflow-x-auto pb-4 mb-8 gap-4">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
//               selectedCategory === category
//                 ? 'bg-orange-600 text-white'
//                 : 'bg-white text-gray-700 hover:bg-orange-100'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredItems.map((item) => (
//           <motion.div
//             key={item.id}
//             layout
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
//             onClick={() => setSelectedItem(item)}
//           >
//             <div className="h-48 w-full overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
//               <p className="mt-2 text-gray-600">{item.description}</p>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
//                 <button
//                   className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToCart(item);
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Item Detail Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
//           >
//             <img
//               src={selectedItem.image}
//               alt={selectedItem.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
//               <p className="text-gray-600 mb-4">{selectedItem.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-2xl font-bold">${selectedItem.price.toFixed(2)}</span>
//                 <div className="space-x-4">
//                   <button
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                     onClick={() => setSelectedItem(null)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//                     onClick={() => {
//                       addToCart(selectedItem);
//                       setSelectedItem(null);
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from 'react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuItems';

const categories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Desserts', 'Drinks', 'Salads'];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item);
    setNotification(`${item.name} added to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h1>
      
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedItem(item)}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                <button
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  onClick={(e) => handleAddToCart(item, e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${selectedItem.price.toFixed(2)}</span>
                <div className="space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
                    onClick={(e) => {
                      handleAddToCart(selectedItem, e);
                      setSelectedItem(null);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}