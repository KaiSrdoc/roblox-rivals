import { gameModes } from '../../lib/data';

import { Card, Badge } from '../../components/ui';

export default function GuidePage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">Game Mode Guides</h2>
        <p className="text-gray-400 text-lg">Master different game modes and climb the ranks!</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {gameModes.map((mode) => (
          <Card key={mode.id} hover className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-blue-300">{mode.name}</h3>
                  <Badge
                    color={
                      mode.difficulty === 'Beginner'
                        ? 'green'
                        : mode.difficulty === 'Intermediate'
                        ? 'yellow'
                        : 'red'
                    }
                  >
                    {mode.difficulty}
                  </Badge>
                </div>
                <p className="text-lg text-gray-300">{mode.description}</p>
                <p className="text-blue-200 font-medium">{mode.playerCount}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-200">Objectives:</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1">
                    {mode.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-96 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">Key Strategies</h4>
                  <div className="space-y-3">
                    {mode.strategies.map((strat, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-3 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-200">{strat.title}</span>
                          <Badge
                            size="sm"
                            color={
                              strat.difficulty === 'Basic'
                                ? 'green'
                                : strat.difficulty === 'Advanced'
                                ? 'yellow'
                                : 'red'
                            }
                          >
                            {strat.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400">{strat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-3">Item Tier List</h4>
                  <div className="space-y-2">
                    {mode.tierList.map((tier) => (
                      <div key={tier.tier} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge
                            color={
                              tier.tier === 'S'
                                ? 'purple'
                                : tier.tier === 'A'
                                ? 'blue'
                                : tier.tier === 'B'
                                ? 'green'
                                : 'yellow'
                            }
                          >
                            Tier {tier.tier}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tier.items.map((item) => (
                            <span
                              key={item}
                              className="text-sm text-gray-300 bg-gray-700/50 rounded px-2 py-0.5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
