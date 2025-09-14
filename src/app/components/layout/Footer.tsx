export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Roblox<span className="text-blue-400">Rivals</span>. All rights reserved.
      </div>
    </footer>
  );
}
