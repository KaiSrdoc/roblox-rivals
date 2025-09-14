'use client';
import { useState } from 'react';
import { Card, Badge, Dropdown } from '../components/ui';
import { items } from '../lib/data';

type Weapon = Extract<typeof items[number], { type: 'Weapon' }>;
type Equipment = Extract<typeof items[number], { type: 'Equipment' }>;

interface MatchupStats {
  damagePerSecond: number;
  survivalTime: number;
  effectiveRange: number;
  mobilityScore: number;
  overallAdvantage: 'Strong' | 'Even' | 'Weak';
}

export default function CalculatorPage() {
  const [selectedWeapon, setSelectedWeapon] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('');
  const [result, setResult] = useState<MatchupStats | null>(null);

  const weapons = items.filter(item => item.type === 'Weapon');
  const equipment = items.filter(item => item.type === 'Equipment');

  function calculateMatchup() {
    if (!selectedWeapon || !selectedEquipment) return;

    const weapon = weapons.find(w => w.id === selectedWeapon)!;
    const equip = equipment.find(e => e.id === selectedEquipment)!;

    // Calculate various combat metrics
    const damage = weapon.stats.damage || 0;
    const speed = weapon.stats.speed || 1;
    const defense = equip.stats.defense || 0;
    const mobility = equip.stats.speed || 1;

    const damagePerSecond = (damage * speed) * (100 / (100 + defense));
    const survivalTime = 100 / Math.max(damagePerSecond, 1);
    const effectiveRange = (weapon.stats.range || 1) * mobility;
    const mobilityScore = mobility * speed;

    const overallAdvantage = damagePerSecond > 50 ? 'Strong' 
      : damagePerSecond < 30 ? 'Weak' 
      : 'Even';

    setResult({
      damagePerSecond: Number(damagePerSecond.toFixed(1)),
      survivalTime: Number(survivalTime.toFixed(1)),
      effectiveRange: Number(effectiveRange.toFixed(1)),
      mobilityScore: Number(mobilityScore.toFixed(1)),
      overallAdvantage
    });
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-4xl font-bold mb-4">Strategy Calculator</h2>
        <p className="text-gray-400 text-lg">
          Analyze matchups between weapons and equipment to optimize your loadout.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-300">Select Loadout</h3>
          
          <div className="space-y-4">
            <Dropdown
              label="Choose Weapon"
              value={selectedWeapon}
              onChange={setSelectedWeapon}
              options={weapons.map(w => ({
                value: w.id,
                label: w.name
              }))}
              className="w-full"
            />

            <Dropdown
              label="Choose Equipment"
              value={selectedEquipment}
              onChange={setSelectedEquipment}
              options={equipment.map(e => ({
                value: e.id,
                label: e.name
              }))}
              className="w-full"
            />

            <button
              onClick={calculateMatchup}
              disabled={!selectedWeapon || !selectedEquipment}
              className="btn-primary w-full"
            >
              Analyze Matchup
            </button>
          </div>
        </Card>

        {result && (
          <Card>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Matchup Analysis</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Overall Matchup:</span>
                <Badge
                  color={
                    result.overallAdvantage === 'Strong' ? 'green'
                    : result.overallAdvantage === 'Weak' ? 'red'
                    : 'yellow'
                  }
                >
                  {result.overallAdvantage}
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-purple-300">Damage per Second</span>
                  <span className="font-mono text-lg">{result.damagePerSecond}</span>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-blue-300">Survival Time (s)</span>
                  <span className="font-mono text-lg">{result.survivalTime}</span>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-green-300">Effective Range</span>
                  <span className="font-mono text-lg">{result.effectiveRange}</span>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-yellow-300">Mobility Score</span>
                  <span className="font-mono text-lg">{result.mobilityScore}</span>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                * Calculations are based on base stats and may vary in actual gameplay
              </div>
            </div>
          </Card>
        )}
      </div>

      <Card>
        <h3 className="text-2xl font-bold text-blue-300 mb-4">Combat Tips</h3>
        {result && (
          <div className="space-y-4">
            {result.damagePerSecond > 50 && (
              <p className="text-green-300">
                ✓ High damage output - focus on aggressive plays and pressure
              </p>
            )}
            {result.survivalTime > 4 && (
              <p className="text-blue-300">
                ✓ Good survivability - can sustain in longer fights
              </p>
            )}
            {result.mobilityScore > 5 && (
              <p className="text-yellow-300">
                ✓ High mobility - use movement to your advantage
              </p>
            )}
            {result.effectiveRange > 3 && (
              <p className="text-purple-300">
                ✓ Good range - maintain distance control
              </p>
            )}
            {result.damagePerSecond < 30 && (
              <p className="text-red-300">
                ! Low damage - focus on objectives and support
              </p>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
