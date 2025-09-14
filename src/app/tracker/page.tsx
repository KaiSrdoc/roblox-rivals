'use client';
import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../lib/storage';
import type { PlayerProgress } from '../types';

const defaultProgress: PlayerProgress = {
  currentLevel: 1,
  completedAchievements: [],
  lastPlayed: '',
};

export default function TrackerPage() {
  const [progress, setProgress] = useState<PlayerProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = LocalStorageManager.get<PlayerProgress>('playerProgress', defaultProgress);
    setProgress(loaded);
    setIsLoaded(true);
  }, []);

  function updateLevel(level: number) {
    const updated = { ...progress, currentLevel: level };
    setProgress(updated);
    LocalStorageManager.set('playerProgress', updated);
  }

  function addAchievement(achievement: string) {
    if (!achievement) return;
    const updated = {
      ...progress,
      completedAchievements: [...progress.completedAchievements, achievement],
    };
    setProgress(updated);
    LocalStorageManager.set('playerProgress', updated);
  }

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Progress Tracker</h2>
      <div className="mb-4">
        <label className="block mb-1">Current Level:</label>
        <input
          type="number"
          min={1}
          value={progress.currentLevel}
          onChange={e => updateLevel(Number(e.target.value))}
          className="bg-gray-800 text-white rounded px-3 py-1 w-24"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Completed Achievements:</label>
        <ul className="list-disc ml-6 text-gray-200 mb-2">
          {progress.completedAchievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
        <AddAchievementForm onAdd={addAchievement} />
      </div>
      <div className="text-gray-400 text-sm">Last played: {progress.lastPlayed || 'Never'}</div>
    </section>
  );
}

function AddAchievementForm({ onAdd }: { onAdd: (a: string) => void }) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAdd(value.trim());
        setValue('');
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="New achievement"
        className="bg-gray-800 text-white rounded px-3 py-1"
      />
      <button type="submit" className="btn-primary">Add</button>
    </form>
  );
}
