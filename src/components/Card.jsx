function Card({ post }) {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p><strong>Autore:</strong> {post.author}</p>
      <p>{post.body}</p>
      <p>{post.public ? "Pubblico" : "Bozza"}</p>
    </div>
  );
}

export default Card;