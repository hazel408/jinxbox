const songs = [
  "A thousand years  Christina Perri",
  "Clocks  Coldplay",
  "Perfect  Ed Sheeran",
  "You are my sunshine  Jimmie Davis",
];

export default function Songs() {
  return (
    <section className="bg-[#c98a4a] text-center py-24 text-white font-ebgaramond">
      <h2 className="text-3xl font-bold mb-2 font-ebgaramond">We have more than 1000 songs...</h2>
      <div className="text-3xl font-semibold mb-8 font-ebgaramond">AND ALSO YOURS</div>
      <div className="flex flex-wrap justify-center gap-4">
        {songs.map((s, i) => {
          const [song, artist] = s.split("  ");
          return (
            <button key={i} className="bg-white text-gray-900 rounded-full px-6 py-2 shadow flex flex-col items-center font-ebgaramond">
              <div className="flex items-center gap-3">
                <img src="/circle.png" alt="" className="h-10 w-10" />
                <span>{song}</span>
              </div>
              <span className="text-sm text-gray-600 mt-1">{artist}</span>
            </button>
          );
        })}
      </div>
      <button className="mt-6 bg-yellow-700 text-white px-6 py-2 rounded-md font-ebgaramond">See all tunes</button>
    </section>
  );
}
