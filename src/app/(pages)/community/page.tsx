import { communityPosts } from '../../lib/data';

export default function CommunityPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Community Hub</h2>
      <ul className="space-y-6">
        {communityPosts.map((post) => (
          <li key={post.id} className="bg-gray-800 rounded p-4 shadow">
            <h3 className="text-xl font-semibold text-blue-300">{post.title}</h3>
            <p className="text-gray-400 mb-1">By {post.author} on {post.date}</p>
            <p className="text-gray-200">{post.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
