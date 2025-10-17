import React, { useState } from "react";
import SignInModal from "./SignInModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">JinxBox</h1>
        </div>

        
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
        </ul>


        <div className="flex gap-8 items-center text-xl">
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-base font-medium text-gray-800 hover:text-black transition"
          >
            Log In
          </button>

          <button>
            <img src="/search.png" alt="Search" className="h-4 w-4" />
          </button>
          <button>
            <img src="/wishlist.png" alt="Wishlist" className="h-4 w-4" />
          </button>
          <button>
            <img src="/cart.png" alt="Cart" className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
