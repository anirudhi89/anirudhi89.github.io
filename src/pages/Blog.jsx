import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Welcome to my new site', date: '2023-10-27', excerpt: 'This is the first post on my new personal website built with React and Vite.' },
    // Add more mock posts here
  ];

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="post-list">
        {posts.map(post => (
          <article key={post.id} className="post-preview">
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
