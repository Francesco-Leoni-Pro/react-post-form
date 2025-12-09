import { useState } from "react";

function Form({ addPost }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { author, title, body, public: isPublic };
    addPost(newPost);

    // Reset del form
    setAuthor("");
    setTitle("");
    setBody("");
    setIsPublic(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Autore"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Testo del post"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <label>
        Pubblico:
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </label>
      <button type="submit">Aggiungi Post</button>
    </form>
  );
}

export default Form;