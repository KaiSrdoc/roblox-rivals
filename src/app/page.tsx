
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-32 -mx-4 sm:-mx-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          style={{ backgroundSize: '60px 60px' }}
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 drop-shadow-2xl">
              Welcome to Roblox<span className="text-white">Rivals</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your ultimate resource for guides, tips, item stats, and community strategies for Roblox&apos;s most competitive game modes. Level up your gameplay and dominate the arena!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/guide" className="btn-primary" data-aos="fade-up" data-aos-delay="100">
                Game Guide
              </a>
              <a href="/tips" className="btn-primary" data-aos="fade-up" data-aos-delay="200">
                Tips & Tricks
              </a>
              <a href="/items" className="btn-primary" data-aos="fade-up" data-aos-delay="300">
                Item Encyclopedia
              </a>
              <a href="/community" className="btn-primary" data-aos="fade-up" data-aos-delay="400">
                Community Hub
              </a>
              <a href="/tracker" className="btn-primary" data-aos="fade-up" data-aos-delay="500">
                Progress Tracker
              </a>
              <a href="/calculator" className="btn-primary" data-aos="fade-up" data-aos-delay="600">
                Strategy Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover p-6 space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Latest Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="badge blue">New</span>
                <span>Master the double-jump technique</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="badge green">Strategy</span>
                <span>Item combinations for max damage</span>
              </li>
            </ul>
          </div>

          <div className="card hover p-6 space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Top Items</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="badge purple">S-Tier</span>
                <span>Legendary Sword</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="badge yellow">A-Tier</span>
                <span>Speed Boots</span>
              </li>
            </ul>
          </div>

          <div className="card hover p-6 space-y-4">
            <h3 className="text-2xl font-bold text-green-400">Community</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="badge green">Guide</span>
                <span>Beginner&apos;s Guide Updated</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="badge red">Event</span>
                <span>Weekend Tournament</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
