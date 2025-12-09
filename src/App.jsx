import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <Form addPost={addPost} />
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}

export default App;
