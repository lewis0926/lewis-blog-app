import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Blog} from "./BlogList";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`) as
    { data: Blog, isPending: boolean, error: any };
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
