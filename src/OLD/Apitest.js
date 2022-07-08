import React, { useState, useEffect } from "react";
import axios from "axios";

// The REST API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Apitest = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);
  //   const { apiError, setapiError } = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    console.log(data);

    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h1>{post.id}</h1>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );
};

export default Apitest;
