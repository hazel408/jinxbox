export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">JinxBox</h1>
      </div>

      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <div className="flex gap-8 text-xl">
        <button>
          <img src="/profilee.png" alt="search" className="h-4 w-4" />
        </button>
        <button>
          <img src="/search.png" alt="search" className="h-4 w-4" />
        </button>
        <button>
          <img src="/wishlist.png" alt="search" className="h-4 w-4" />
        </button>
        <button>
          <img src="/cart.png" alt="search" className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
