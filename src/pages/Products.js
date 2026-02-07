import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Dynamics 365 Sales",
      category: "CRM",
      description: "Modern sales automation solution with AI-powered insights",
      features: ["Sales forecasting", "Pipeline management", "Email integration", "Mobile sales app"],
      icon: "📈",
      color: "#0078d4"
    },
    {
      id: 2,
      name: "Dynamics 365 Customer Service",
      category: "Customer Service",
      description: "Omnichannel customer service with case management",
      features: ["Case management", "Knowledge base", "Service analytics", "Customer portals"],
      icon: "🤝",
      color: "#107c10"
    },
    {
      id: 3,
      name: "Dynamics 365 Finance",
      category: "ERP",
      description: "Financial management and operational insights",
      features: ["Financial reporting", "Budget planning", "Accounts payable/receivable", "Tax management"],
      icon: "💰",
      color: "#5c2d91"
    },
    {
      id: 4,
      name: "Dynamics 365 Supply Chain",
      category: "Supply Chain",
      description: "End-to-end supply chain management",
      features: ["Inventory management", "Warehouse management", "Procurement", "Demand forecasting"],
      icon: "📦",
      color: "#d83b01"
    },
    {
      id: 5,
      name: "Dynamics 365 Marketing",
      category: "Marketing",
      description: "Marketing automation and lead management",
      features: ["Email marketing", "Event management", "Lead scoring", "Marketing analytics"],
      icon: "📢",
      color: "#0078d4"
    },
    {
      id: 6,
      name: "Power Platform Integration",
      category: "Platform",
      description: "Extend and customize D365 with low-code tools",
      features: ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"],
      icon: "⚡",
      color: "#742774"
    }
  ];

  const plans = [
    {
      name: "Business Central",
      price: "$70",
      period: "per user/month",
      features: ["Financial management", "Supply chain", "Project management", "Sales & service"],
      highlight: false
    },
    {
      name: "Sales Professional",
      price: "$65",
      period: "per user/month",
      features: ["Sales automation", "AI insights", "Mobile app", "Outlook integration"],
      highlight: false
    },
    {
      name: "Customer Service Professional",
      price: "$50",
      period: "per user/month",
      features: ["Case management", "Knowledge base", "Service analytics", "Omnichannel"],
      highlight: true
    },
    {
      name: "Finance",
      price: "$180",
      period: "per user/month",
      features: ["Financial reporting", "Budget planning", "Project accounting", "Fixed assets"],
      highlight: false
    }
  ];

  return (
    <div className="products">
      <section className="hero">
        <h1>Microsoft Dynamics 365 Products</h1>
        <p>
          Transform your business with intelligent applications that adapt to your needs. 
          Choose the right solution for your organization.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
          <button className="cta-button">Start free trial</button>
          <button className="cta-button secondary">Contact sales</button>
        </div>
      </section>

      {/* Find the right plan section */}
      <div className="about-section" style={{textAlign: 'center'}}>
        <h2>Find the right plan for your business</h2>
        <p style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
          Microsoft Dynamics 365 offers flexible plans designed for businesses of all sizes. 
          Start with what you need and scale as you grow.
        </p>
        
        <div className="products-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`product-card ${plan.highlight ? 'highlighted' : ''}`} 
                 style={plan.highlight ? {border: '2px solid var(--ms-blue)', transform: 'scale(1.02)'} : {}}>
              {plan.highlight && <div className="category" style={{background: 'var(--ms-blue)', color: 'white'}}>Most Popular</div>}
              <h3>{plan.name}</h3>
              <div style={{margin: '1.5rem 0'}}>
                <span style={{fontSize: '2.5rem', fontWeight: '300', color: 'var(--ms-gray-90)'}}>{plan.price}</span>
                <span style={{color: 'var(--ms-gray-60)'}}> {plan.period}</span>
              </div>
              <ul className="product-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="cta-button" style={{width: '100%', marginTop: 'auto'}}>
                Get started
              </button>
            </div>
          ))}
        </div>
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
            <div className="product-icon" style={{background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}99 100%)`}}>
              {product.icon}
            </div>
            <div className="category">{product.category}</div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button secondary" style={{marginTop: 'auto'}}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="about-section" style={{textAlign: 'center'}}>
        <h2>Why Choose Microsoft Dynamics 365?</h2>
        <div className="ms-grid" style={{marginTop: '2rem'}}>
          <div className="ms-col-6">
            <div className="product-card" style={{textAlign: 'center', height: '100%'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🏢</div>
              <h3>Unified Platform</h3>
              <p>Seamless integration between all business applications with common data model</p>
            </div>
          </div>
          <div className="ms-col-6">
            <div className="product-card" style={{textAlign: 'center', height: '100%'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🤖</div>
              <h3>AI-Powered Insights</h3>
              <p>Built-in artificial intelligence for predictive insights and automation</p>
            </div>
          </div>
          <div className="ms-col-6">
            <div className="product-card" style={{textAlign: 'center', height: '100%'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>☁️</div>
              <h3>Cloud Native</h3>
              <p>Scalable, secure, and always up-to-date cloud solution</p>
            </div>
          </div>
          <div className="ms-col-6">
            <div className="product-card" style={{textAlign: 'center', height: '100%'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔄</div>
              <h3>Flexible & Scalable</h3>
              <p>Start with what you need and add modules as you grow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Microsoft Partnership */}
      <div className="blog-post" style={{background: 'var(--ms-gray-10)', textAlign: 'center'}}>
        <h2>Microsoft Partner Network</h2>
        <p>
          Join thousands of partners worldwide delivering Dynamics 365 solutions. 
          Access resources, training, and go-to-market opportunities.
        </p>
        <button className="cta-button" style={{marginTop: '1rem'}}>
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default Products;