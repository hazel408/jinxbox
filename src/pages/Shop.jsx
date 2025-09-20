import { useState } from "react";
import Footer from "../components/Footer";

const products = [
  { name: "WALNUT SMALL BOX", price: "1460.00", img: "/p1.png" },
  { name: "WOODEN BOX", price: "796.00", img: "/p2.png" },
  { name: "CAOBA PIANO", price: "3320.00", img: "/p3.png" },
  { name: "CRANK MECHANISM", price: "657.00", img: "/p4.png" },
  { name: "30 NOTES WIND UP", price: "6965.00", img: "/p5.png" },
  { name: "ALL OF ME", price: "3452.00", img: "/p6.png" },
  { name: "HEART AND THREAD", price: "1660.00", img: "/p7.png" },
  { name: "FAMILY", price: "1925.60", img: "/p8.png" },
  { name: "BEST DAD", price: "1925.00", img: "/p9.png" },
  { name: "HAPPY BIRTHDAY", price: "1925.60", img: "/p10.png" },
  { name: "BALLERINAS", price: "7000.00", img: "/p11.png" },
  { name: "LACQUERED BOX", price: "500.00", img: "/p12.png" },
];

export default function Shop() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section
        className="relative h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Shop</h1>
          <p className="text-gray-600 mt-2">
            Home <span className="mx-2">›</span> Shop
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-[#FFF3E3] text-sm border-b">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <span className="material-icons"></span> Filter
          </button>
          <button className="flex items-center gap-2">
            <span className="material-icons"></span>
          </button>
          <span>Showing 1–16 of 32 results</span>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span>Show</span>
          <input
            type="number"
            value={16}
            className="w-16 text-center border rounded px-2 py-1"
            readOnly
          />
          <span>Short by</span>
          <select className="border rounded px-2 py-1">
            <option>Default</option>
          </select>
        </div>
      </div>

      
      <div className="text-left my-6 ml-6">
        <span className="italic font-ebgaramond text-lg">  Custom </span>
        <span className="font-bold font-ebgaramond text-2xl block">  MUSIC BOXES</span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center py-6 border-b">
        {["Type of boxes", "Material", "Theme", "Type of mechanism", "Moments"].map(
          (filter, i) => (
            <select
              key={i}
              className="border rounded px-4 py-2 text-gray-600 text-sm"
            >
              <option>{filter}</option>
            </select>
          )
        )}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded shadow-sm hover:shadow-md">
            <img src={p.img} alt={p.name} className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-sm font-bold mb-1">{p.name}</h3>
            <p className="text-xs text-gray-500 mb-2">Customizable</p>
            <p className="font-semibold">{p.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pb-16">
        <button className="px-3 py-1 rounded bg-yellow-700 text-white">1</button>
        <button className="px-3 py-1 rounded bg-[#FFF3E3] text-gray-700">2</button>
        <button className="px-3 py-1 rounded bg-[#FFF3E3] text-gray-700">3</button>
        <button className="px-3 py-1 rounded bg-[#FFF3E3] text-gray-700">Next</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
