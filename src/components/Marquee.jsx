/**
 * Endless horizontal marquee — used for the editorial credits strip.
 * Duplicates content so the loop is seamless.
 */
export default function Marquee({ items = [], speed = 'animate-marquee', separator = '✦' }) {
  const repeated = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 select-none">
      <div className={`flex w-max ${speed}`}>
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
            <span className="font-display italic text-3xl md:text-5xl text-graphite/70">{item}</span>
            <span className="text-champagne text-xl">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
