export default function Hero() {
  return (
    <section
      className="relative bg-[#f6f4f2] h-[500px] flex items-center justify-start px-6 md:px-16"
      style={{ 
        backgroundImage: "url('/hero.png')", // character image
        backgroundSize: "cover", 
        backgroundPosition: "right center" 
      }}
    >
      {/* Text Box */}
      <div className="bg-[#FFF3E3] rounded-xl shadow-lg p-8 max-w-md">
        <h1 className="text-3xl md:text-4xl font-serif text-yellow-800 mb-4 leading-snug">
          <span className="italic mx-1">Every</span>
          <span className="mx-1">BOX,</span>
          <span className="italic mx-1">a</span>
          <span className="mx-1">MEMORY.</span>
          <br />
          <span className="italic mx-1">Every</span>
          <span className="mx-1">TUNE,</span>
          <span className="italic mx-1">a</span>
          <span className="mx-1">GHOST.</span>
        </h1>
        <p className="text-gray-700 mb-6">
          Custom music boxes with songs that are always with you.
        </p>
        <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-2 rounded-md font-semibold">
          BUY
        </button>
      </div>

    </section>
  );
}
