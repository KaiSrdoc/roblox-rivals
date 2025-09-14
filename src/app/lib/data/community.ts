export interface CommunityPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
}

export const communityPosts: CommunityPost[] = [
  {
    id: 'post1',
    author: 'PlayerOne',
    title: 'How I won my first ranked match',
    content: 'I focused on movement and used the dash ability to outplay my opponents.',
    date: '2025-09-13',
  },
  {
    id: 'post2',
    author: 'GamerGal',
    title: 'Best team strategies',
    content: 'Communication and role assignment are key to winning team battles.',
    date: '2025-09-12',
  },
];
