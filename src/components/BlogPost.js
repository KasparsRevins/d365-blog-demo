import React from 'react';

const BlogPost = ({ title, date, category, excerpt, readTime }) => {
  return (
    <article className="blog-post">
      <div className="category">{category}</div>
      <h2>{title}</h2>
      <div className="meta">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>
      <p>{excerpt}</p>
      <button className="read-more">Read More →</button>
    </article>
  );
};

export default BlogPost;