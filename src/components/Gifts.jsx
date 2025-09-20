const gifts = [
  { name: "GIFTS FOR COUPLE", img: "/couple.png" },
  { name: "GIFTS FOR FAMILY", img: "/family.png" },
  { name: "GIFTS FOR BIRTHDAYS", img: "/birthday.png" },
];

export default function Gifts() {
  return (
    <section className="px-6 py-12 font-ebgaramond">
      <div className="text-left">
        <span className="italic text-2xl font-ebgaramond block">a personalized box for.</span>
        <span className="text-2xl font-semibold mb-8 font-ebgaramond block">EVERY MOMENT</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {gifts.map((g, i) => (
          <div key={i} className="relative">
            <img src={g.img} alt={g.name} className="rounded-lg shadow-md w-full" />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl drop-shadow font-ebgaramond text-center whitespace-nowrap">
              GIFTS FOR<br />{g.name.replace("GIFTS FOR ", "")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
