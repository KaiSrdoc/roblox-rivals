export interface Tip {
  id: string;
  category: string;
  content: string;
}

export const tips: Tip[] = [
  {
    id: 'movement1',
    category: 'Movement',
    content: 'Master dashing to evade attacks and reposition quickly.'
  },
  {
    id: 'combat1',
    category: 'Combat',
    content: 'Use the environment for cover and surprise attacks.'
  },
  {
    id: 'strategy1',
    category: 'Strategy',
    content: 'Coordinate with teammates for effective team battles.'
  }
];
