export interface GameMode {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  playerCount: string;
  objectives: string[];
  strategies: {
    title: string;
    description: string;
    difficulty: 'Basic' | 'Advanced' | 'Expert';
  }[];
  tierList: {
    tier: 'S' | 'A' | 'B' | 'C';
    items: string[];
  }[];
}

export const gameModes: GameMode[] = [
  {
    id: 'classic',
    name: 'Classic Mode',
    description: 'Traditional free-for-all combat with standard rules. Master the basics and prove your skill!',
    difficulty: 'Beginner',
    playerCount: '8-16 players',
    objectives: [
      'Eliminate opponents to score points',
      'Collect power-ups to gain advantages',
      'Survive until the end of the round',
      'Reach the target score first to win'
    ],
    strategies: [
      {
        title: 'Map Control',
        description: 'Control key areas of the map to access power-ups and deny resources to opponents.',
        difficulty: 'Basic'
      },
      {
        title: 'Power-up Timing',
        description: 'Learn spawn timings of major power-ups and contest them effectively.',
        difficulty: 'Advanced'
      },
      {
        title: 'Advanced Movement',
        description: 'Master double jumps, wall slides, and aerial combat for maximum mobility.',
        difficulty: 'Expert'
      }
    ],
    tierList: [
      {
        tier: 'S',
        items: ['Legendary Sword', 'Speed Boots', 'Shield Generator']
      },
      {
        tier: 'A',
        items: ['Power Gauntlet', 'Stealth Module', 'Jump Booster']
      },
      {
        tier: 'B',
        items: ['Basic Armor', 'Health Pack', 'Stun Grenade']
      },
      {
        tier: 'C',
        items: ['Basic Sword', 'Small Shield', 'Recovery Potion']
      }
    ]
  },
  {
    id: 'ranked',
    name: 'Ranked Mode',
    description: 'Competitive mode with skill-based matchmaking and seasonal rankings.',
    difficulty: 'Advanced',
    playerCount: '4-8 players',
    objectives: [
      'Win matches to climb the ranked ladder',
      'Complete placement matches for initial rank',
      'Earn seasonal rewards',
      'Maintain rank by playing regularly'
    ],
    strategies: [
      {
        title: 'Meta Knowledge',
        description: 'Stay updated with current meta strategies and counter-picks.',
        difficulty: 'Basic'
      },
      {
        title: 'Resource Economy',
        description: 'Manage your resources efficiently and track opponent cooldowns.',
        difficulty: 'Advanced'
      },
      {
        title: 'Team Synergy',
        description: 'Coordinate ultimates and abilities with teammates for maximum impact.',
        difficulty: 'Expert'
      }
    ],
    tierList: [
      {
        tier: 'S',
        items: ['Ultimate Blade', 'Elite Shield', 'Legendary Boots']
      },
      {
        tier: 'A',
        items: ['Power Core', 'Tactical Visor', 'Energy Shield']
      },
      {
        tier: 'B',
        items: ['Combat Armor', 'Health Module', 'Smoke Device']
      },
      {
        tier: 'C',
        items: ['Basic Weapon', 'Light Armor', 'Speed Potion']
      }
    ]
  },
  {
    id: 'team',
    name: 'Team Battle',
    description: 'Strategic 4v4 team-based combat with unique objectives.',
    difficulty: 'Intermediate',
    playerCount: '8 players (4v4)',
    objectives: [
      'Capture and hold control points',
      'Coordinate with teammates',
      'Complete team objectives',
      'Defend your territory'
    ],
    strategies: [
      {
        title: 'Role Assignment',
        description: 'Assign and maintain clear team roles for balanced composition.',
        difficulty: 'Basic'
      },
      {
        title: 'Map Rotation',
        description: 'Learn effective rotation patterns between objectives.',
        difficulty: 'Advanced'
      },
      {
        title: 'Team Combos',
        description: 'Execute coordinated ability combinations with teammates.',
        difficulty: 'Expert'
      }
    ],
    tierList: [
      {
        tier: 'S',
        items: ['Team Shield', 'Group Heal', 'Area Control Device']
      },
      {
        tier: 'A',
        items: ['Tactical Scanner', 'Support Pack', 'Defense Matrix']
      },
      {
        tier: 'B',
        items: ['Team Buff', 'Utility Belt', 'Radar Device']
      },
      {
        tier: 'C',
        items: ['Basic Support', 'Team Heal', 'Vision Ward']
      }
    ]
  }
];
