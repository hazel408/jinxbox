const reviews = [
  { name: "Hazel B.", text: "Unexpectedly well built. It was a Pleasant one.", date: "August 14, 2025" },
  { name: "Jenelle R.", text: "Bought another one.", date: "August 14, 2025" },
  { name: "JM D.", text: "I'm in love with my music box.", date: "August 14, 2025" },
];

export default function Reviews() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Reviews from our customers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm bg-white">
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className="mt-4 text-gray-800">{r.text}</p>
            <p className="text-sm mt-4 text-gray-500">{r.name} — {r.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
