'use client';
import { useState } from 'react';
import { items } from '../../lib/data';
import { Card, Badge, Dropdown } from '../../components/ui';

type SortOption = 'name' | 'type' | 'rarity';
type FilterOption = 'All' | 'Weapon' | 'Equipment' | 'Ability' | 'Consumable';

export default function ItemsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [filterBy, setFilterBy] = useState<FilterOption>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items
    .filter(item => 
      (filterBy === 'All' || item.type === filterBy) &&
      (searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      return b.rarity.localeCompare(a.rarity); // Sort by rarity (highest first)
    });

  const rarityColors = {
    Common: 'green',
    Rare: 'blue',
    Epic: 'purple',
    Legendary: 'yellow'
  } as const;

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">Item Encyclopedia</h2>
        <p className="text-gray-400 text-lg">
          Explore and learn about all items, weapons, and abilities in the game.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Search Items
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by name or description..."
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Dropdown
          label="Filter by Type"
          value={filterBy}
          onChange={value => setFilterBy(value as FilterOption)}
          options={[
            { value: 'All', label: 'All Types' },
            { value: 'Weapon', label: 'Weapons' },
            { value: 'Equipment', label: 'Equipment' },
            { value: 'Ability', label: 'Abilities' },
            { value: 'Consumable', label: 'Consumables' }
          ]}
          className="w-48"
        />

        <Dropdown
          label="Sort by"
          value={sortBy}
          onChange={value => setSortBy(value as SortOption)}
          options={[
            { value: 'name', label: 'Name' },
            { value: 'type', label: 'Type' },
            { value: 'rarity', label: 'Rarity' }
          ]}
          className="w-48"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredItems.map(item => (
          <Card key={item.id} hover className="flex flex-col h-full">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-300 mb-1">
                  {item.name}
                </h3>
                <div className="flex gap-2">
                  <Badge color="blue">{item.type}</Badge>
                  <Badge color={rarityColors[item.rarity]}>{item.rarity}</Badge>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{item.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.entries(item.stats).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-gray-400 capitalize">{key}:</span>
                  <span className="text-gray-200">{value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-auto">
              <div>
                <h4 className="font-semibold text-purple-300 mb-2">Effects</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {item.effects.map((effect, i) => (
                    <li key={i}>{effect}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-300 mb-2">Countered By</h4>
                <div className="flex flex-wrap gap-1">
                  {item.counters.map((counter, i) => (
                    <span
                      key={i}
                      className="text-sm bg-red-900/30 text-red-200 rounded px-2 py-0.5"
                    >
                      {counter}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-300 mb-2">Recommended For</h4>
                <div className="flex flex-wrap gap-1">
                  {item.recommendedFor.map((rec, i) => (
                    <span
                      key={i}
                      className="text-sm bg-green-900/30 text-green-200 rounded px-2 py-0.5"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
