export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 font-ebgaramond">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Left section - Logo + Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="" className="h-10 w-10" />
            <h1 className="text-xl font-bold font-ebgaramond">JinxBox</h1>
          </div>
        </div>

        {/* Middle section - Links */}
        <div className="flex flex-col space-y-2 text-gray-700 text-sm font-ebgaramond">
          <a href="#">Custom music boxes</a>
          <a href="#">Tunes for music boxes</a>
          <a href="#">Music box models</a>
          <a href="#">Music boxes retail</a>
        </div>

        {/* Right section - Navigation */}
        <div className="flex flex-col space-y-2 text-gray-700 text-sm font-ebgaramond">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t text-center text-xs text-gray-500 py-4 font-ebgaramond">
        © 2025 JinxBox. All rights reserved
      </div>
    </footer>
  );
}
