import { Link } from "react-router-dom";

export default function MusicBoxes() {
  const boxes = [
    { name: "Medium boxes", img: "/medium.png" },
    { name: "Small boxes", img: "/small.png" },
    { name: "Geometric boxes", img: "/geometric.png" },
    { name: "Round boxes", img: "/round.png" },
    { name: "Carousels", img: "/carousels.png" },
    { name: "Pianos", img: "/piano.png" },
  ];

  return (
    <section className="px-6 py-12 text-center font-ebgaramond">
      <h2 className="text-2xl font-semibold mb-2 text-left font-ebgaramond">
        <span className="italic font-ebgaramond block">Our</span>
      </h2>
      <h2 className="text-2xl font-semibold mb-8 text-left font-ebgaramond">
        MUSIC BOXES
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {boxes.map((b, i) => (
          <div key={i} className="space-y-4">
            <img src={b.img} alt={b.name} className="mx-auto rounded-lg shadow-md" />
            <p className="font-medium font-ebgaramond">{b.name}</p>
          </div>
        ))}
      </div>

      {/* ✅ This works now */}
      <Link
        to="/shop"
        className="mt-8 inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-semibold"
      >
        Go to the shop
      </Link>
    </section>
  );
}
