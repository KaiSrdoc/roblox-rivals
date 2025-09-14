import { tips } from '../../lib/data';

export default function TipsPage() {
  const categories = Array.from(new Set(tips.map((t) => t.category)));
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Tips & Tricks</h2>
      {categories.map((cat) => (
        <div key={cat} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">{cat}</h3>
          <ul className="space-y-2">
            {tips.filter((t) => t.category === cat).map((tip) => (
              <li key={tip.id} className="bg-gray-800 rounded p-3 text-gray-200">
                {tip.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
