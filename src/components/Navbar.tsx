// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart, User, Menu } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const { user } = useAuth();

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <span className="text-2xl font-bold text-orange-600">FoodieHub</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
//             <Link to="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
//             <Link to="/cart" className="text-gray-700 hover:text-orange-600">
//               <ShoppingCart className="w-6 h-6" />
//             </Link>
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <User className="w-6 h-6 text-gray-700" />
//                 <span className="text-gray-700">{user.name}</span>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="/signup"
//                   className="text-orange-600 hover:text-orange-700 font-medium"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
//                 >
//                   Login
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-orange-600"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               className="block px-3 py-2 text-gray-700 hover:text-orange-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/menu"
//               className="block px-3 py-2 text-gray-700 hover:text-orange-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Menu
//             </Link>
//             <Link
//               to="/cart"
//               className="block px-3 py-2 text-gray-700 hover:text-orange-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Cart
//             </Link>
//             {!user && (
//               <>
//                 <Link
//                   to="/signup"
//                   className="block px-3 py-2 text-orange-600 hover:text-orange-700"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="block px-3 py-2 text-gray-700 hover:text-orange-600"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }





import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const { itemCount } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600">FoodieHub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
            <Link to="/cart" className="text-gray-700 hover:text-orange-600 relative">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6 text-gray-700" />
                <span className="text-gray-700">{user.name}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signup"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="text-gray-700 hover:text-orange-600 relative mr-4">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            {!user && (
              <>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-orange-600 hover:text-orange-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}