import React, {FormEvent, useState} from 'react';
import Blog from "./Blog";
import {useHistory} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("lewis");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const blog: Blog = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
   };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="lewis">lewis</option>
          <option value="sarah">yoshi</option>
        </select>
        {!isPending && <button>Create Blog</button>}
        {isPending && <button disabled>Creating Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
