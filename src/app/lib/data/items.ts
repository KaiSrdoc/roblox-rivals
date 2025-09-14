export interface Item {
  id: string;
  name: string;
  type: 'Weapon' | 'Equipment' | 'Ability' | 'Consumable';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  stats: {
    damage?: number;
    defense?: number;
    speed?: number;
    cooldown?: number;
    duration?: number;
    range?: number;
    weight?: number;
  };
  description: string;
  effects: string[];
  counters: string[];
  recommendedFor: string[];
}

export const items: Item[] = [
  {
    id: 'legendary-sword',
    name: 'Legendary Sword',
    type: 'Weapon',
    rarity: 'Legendary',
    stats: {
      damage: 75,
      speed: 8,
      range: 3
    },
    description: 'An ancient blade imbued with incredible power.',
    effects: [
      'Critical hits deal 2x damage',
      'Increased movement speed on hit',
      'Generates energy on successful hits'
    ],
    counters: ['Shield Generator', 'Elite Shield', 'Team Shield'],
    recommendedFor: ['Classic Mode', 'Ranked Mode', 'Aggressive playstyles']
  },
  {
    id: 'speed-boots',
    name: 'Speed Boots',
    type: 'Equipment',
    rarity: 'Epic',
    stats: {
      speed: 12,
      weight: 2
    },
    description: 'Enchanted boots that grant superior mobility.',
    effects: [
      'Permanent movement speed boost',
      'Double jump ability',
      'Reduced fall damage'
    ],
    counters: ['Stun Grenade', 'Area Control Device', 'Tactical Scanner'],
    recommendedFor: ['Map control', 'Objective rushing', 'Evasive playstyles']
  },
  {
    id: 'shield-generator',
    name: 'Shield Generator',
    type: 'Equipment',
    rarity: 'Epic',
    stats: {
      defense: 60,
      duration: 15,
      cooldown: 30
    },
    description: 'Projects a powerful energy shield around the user.',
    effects: [
      'Blocks 60% of incoming damage',
      'Regenerates shield over time',
      'Protects nearby allies'
    ],
    counters: ['Power Core', 'Ultimate Blade', 'Energy Shield'],
    recommendedFor: ['Team Battle', 'Defensive positions', 'Support roles']
  },
  {
    id: 'power-gauntlet',
    name: 'Power Gauntlet',
    type: 'Weapon',
    rarity: 'Epic',
    stats: {
      damage: 45,
      speed: 5,
      range: 1
    },
    description: 'A high-tech gauntlet that amplifies striking power.',
    effects: [
      'Charged strikes deal bonus damage',
      'Breaks shields more effectively',
      'Short-range stunning effect'
    ],
    counters: ['Speed Boots', 'Stealth Module', 'Tactical Scanner'],
    recommendedFor: ['Close combat', 'Shield breaking', 'Aggressive playstyles']
  },
  {
    id: 'stealth-module',
    name: 'Stealth Module',
    type: 'Equipment',
    rarity: 'Epic',
    stats: {
      duration: 8,
      cooldown: 20
    },
    description: 'Advanced cloaking technology for tactical advantages.',
    effects: [
      'Temporary invisibility',
      'Silent movement',
      'Bonus damage from stealth'
    ],
    counters: ['Tactical Scanner', 'Area Control Device', 'Radar Device'],
    recommendedFor: ['Flanking', 'Assassination', 'Strategic plays']
  },
  {
    id: 'healing-orb',
    name: 'Healing Orb',
    type: 'Consumable',
    rarity: 'Rare',
    stats: {
      duration: 5,
      cooldown: 15
    },
    description: 'A mystical orb that restores health over time.',
    effects: [
      'Heals 20 HP per second',
      'Creates healing zone for allies',
      'Cleanses negative effects'
    ],
    counters: ['Area denial abilities', 'Burst damage', 'Anti-healing effects'],
    recommendedFor: ['Support roles', 'Team sustain', 'Objective control']
  },
  {
    id: 'dash-ability',
    name: 'Dash Module',
    type: 'Ability',
    rarity: 'Common',
    stats: {
      cooldown: 6,
      range: 5
    },
    description: 'Quick burst movement ability for positioning.',
    effects: [
      'Short-range teleport',
      'Invulnerable during dash',
      'Can be used mid-air'
    ],
    counters: ['Prediction abilities', 'Area control', 'Tracking skills'],
    recommendedFor: ['Mobility', 'Escape tactics', 'Initiation']
  }
];
