import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        src={post.cover}
        alt={post.title}
        key={post.id}
        h1={post.title}
        h3={post.body}
      />
    ))}
  </div>
);
