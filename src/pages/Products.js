import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Dynamics 365 Sales",
      category: "CRM",
      description: "Modern sales automation solution with AI-powered insights",
      features: [
        "Sales forecasting",
        "Pipeline management",
        "Email integration",
        "Mobile sales app"
      ]
    },
    {
      id: 2,
      name: "Dynamics 365 Customer Service",
      category: "Customer Service",
      description: "Omnichannel customer service with case management",
      features: [
        "Case management",
        "Knowledge base",
        "Service analytics",
        "Customer portals"
      ]
    },
    {
      id: 3,
      name: "Dynamics 365 Finance",
      category: "ERP",
      description: "Financial management and operational insights",
      features: [
        "Financial reporting",
        "Budget planning",
        "Accounts payable/receivable",
        "Tax management"
      ]
    },
    {
      id: 4,
      name: "Dynamics 365 Supply Chain",
      category: "Supply Chain",
      description: "End-to-end supply chain management",
      features: [
        "Inventory management",
        "Warehouse management",
        "Procurement",
        "Demand forecasting"
      ]
    },
    {
      id: 5,
      name: "Dynamics 365 Marketing",
      category: "Marketing",
      description: "Marketing automation and lead management",
      features: [
        "Email marketing",
        "Event management",
        "Lead scoring",
        "Marketing analytics"
      ]
    },
    {
      id: 6,
      name: "Power Platform Integration",
      category: "Platform",
      description: "Extend and customize D365 with low-code tools",
      features: [
        "Power Apps",
        "Power Automate",
        "Power BI",
        "Power Virtual Agents"
      ]
    }
  ];

  return (
    <div className="products">
      <div className="hero">
        <h1>Dynamics 365 Products</h1>
        <p>Explore the comprehensive suite of Microsoft Dynamics 365 applications</p>
      </div>

      <div className="products-intro">
        <h2>Unified Business Applications</h2>
        <p>
          Microsoft Dynamics 365 brings together CRM and ERP capabilities with 
          productivity applications and AI tools. Each product is designed to 
          work seamlessly together while providing standalone value.
        </p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-category">{product.category}</div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <ul className="features">
              {product.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="integration-section">
        <h2>Why Choose Dynamics 365?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>🏢 Unified Platform</h3>
            <p>Seamless integration between all business applications</p>
          </div>
          <div className="benefit">
            <h3>🤖 AI-Powered</h3>
            <p>Built-in artificial intelligence for predictive insights</p>
          </div>
          <div className="benefit">
            <h3>☁️ Cloud Native</h3>
            <p>Scalable, secure, and always up-to-date cloud solution</p>
          </div>
          <div className="benefit">
            <h3>🔄 Flexible</h3>
            <p>Start with what you need and add modules as you grow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;