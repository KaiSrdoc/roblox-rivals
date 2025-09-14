import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Roblox<span className="text-blue-400">Rivals</span>
        </h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/tips">Tips</Link>
          <Link href="/items">Items</Link>
          <Link href="/community">Community</Link>
          <Link href="/tracker">Tracker</Link>
          <Link href="/calculator">Calculator</Link>
        </nav>
      </div>
    </header>
  );
}
