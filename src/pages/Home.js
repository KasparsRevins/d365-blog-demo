import React from 'react';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Dynamics 365 Sales",
      date: "March 15, 2024",
      category: "Sales",
      excerpt: "Learn how to leverage D365 Sales to streamline your sales processes and increase revenue with intelligent insights.",
      readTime: 5
    },
    {
      id: 2,
      title: "Customer Service Automation with D365",
      date: "March 10, 2024",
      category: "Customer Service",
      excerpt: "Discover how to automate customer service workflows and provide exceptional support experiences.",
      readTime: 7
    },
    {
      id: 3,
      title: "Integrating Power Platform with Dynamics 365",
      date: "March 5, 2024",
      category: "Integration",
      excerpt: "Explore the power of combining Power Apps, Power Automate, and Power BI with your D365 implementation.",
      readTime: 8
    },
    {
      id: 4,
      title: "AI Insights in Dynamics 365 Finance",
      date: "February 28, 2024",
      category: "Finance",
      excerpt: "How artificial intelligence is transforming financial operations and providing predictive insights.",
      readTime: 6
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Dynamics 365 Insights</h1>
        <p>Your comprehensive resource for Microsoft Dynamics 365 news, tutorials, and best practices</p>
        <button className="cta-button">Start Exploring</button>
      </section>

      <section className="featured-posts">
        <h2>Latest Insights</h2>
        <div className="posts-grid">
          {blogPosts.map(post => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest Dynamics 365 updates and insights</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;