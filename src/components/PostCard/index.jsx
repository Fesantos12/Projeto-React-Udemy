import './style.css';

export const PostCard = ({ src, alt, h1, h3 }) => {
  return (
    <div className="post">
      <img src={src} alt={alt} />
      <div className="post-content">
        <h1>{h1}</h1>
        <h3>{h3}</h3>
      </div>
    </div>
  );
};
