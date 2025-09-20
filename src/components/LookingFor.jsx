export default function LookingFor() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6">
        What are you looking for?
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-8 px-4">
        <span className="font-semibold">Tell us what you are looking for: </span> 
        who you want to surprise, what things they like, if it is a gift for a special occasion... 
        and, if you have any melody in mind, even better.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Ex. I’m looking for a box for my partner with the song City of stars and romantic design."
          className="w-full md:flex-1 px-4 py-3 rounded-full border border-yellow-300 bg-yellow-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded-full font-semibold">
          SEARCH
        </button>
      </div>
    </section>
  );
}
