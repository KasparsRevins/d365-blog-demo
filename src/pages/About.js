import React from 'react';

const About = () => {

  const values = [
    {
      id: 1,
      title: "Customer Success",
      icon: "🎯",
      description: "We measure our success by the success of our customers. Every solution is tailored to drive business outcomes."
    },
    {
      id: 2,
      title: "Technical Excellence",
      icon: "⚙️",
      description: "Maintaining deep expertise across the Microsoft ecosystem to deliver robust, scalable solutions."
    },
    {
      id: 3,
      title: "Continuous Learning",
      icon: "📚",
      description: "Staying ahead of Microsoft's rapid innovation cycle through constant learning and certification."
    },
    {
      id: 4,
      title: "Collaborative Approach",
      icon: "🤝",
      description: "Working as an extension of your team to ensure seamless implementation and adoption."
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Dynamics 365 Launch",
      description: "Microsoft launched Dynamics 365, unifying CRM and ERP into one intelligent platform."
    },
    {
      year: "2018",
      title: "Power Platform Integration",
      description: "Deep integration with Power Platform enabled custom solutions and automation."
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Introduction of AI-powered insights across all Dynamics 365 applications."
    },
    {
      year: "2023",
      title: "Copilot for Dynamics 365",
      description: "AI assistant integration transforming how users interact with business applications."
    }
  ];

  const certifications = [
    { name: "Microsoft Certified: Dynamics 365 Fundamentals", icon: "🏆" },
    { name: "Microsoft Certified: Power Platform Fundamentals", icon: "⚡" },
    { name: "Microsoft Certified: Azure Solutions Architect", icon: "☁️" },
    { name: "Microsoft Certified: Dynamics 365 + Power Platform Solution Architect", icon: "🎯" }
  ];

  return (
    <div className="about">
      <section className="hero">
        <h1>About Dynamics 365 Insights</h1>
        <p>
          We are a team of Microsoft-certified experts dedicated to helping organizations 
          maximize their investment in Dynamics 365. Our mission is to provide authoritative, 
          practical guidance for businesses navigating digital transformation.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
          <button className="cta-button">Contact Our Team</button>
          <button className="cta-button secondary">Download Resources</button>
        </div>
      </section>

      {/* Microsoft Partnership Section */}
      <div className="about-section">
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem'}}>
          <div style={{background: 'var(--ms-blue)', color: 'white', padding: '0.75rem', borderRadius: '6px'}}>
            <span style={{fontSize: '1.5rem'}}>🏢</span>
          </div>
          <div>
            <h2>Microsoft Gold Partner</h2>
            <p style={{color: 'var(--ms-gray-70)'}}>
              As a Microsoft Gold Partner, we have direct access to engineering teams, 
              early previews, and specialized training to deliver exceptional solutions.
            </p>
          </div>
        </div>
        
        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p style={{color: 'var(--ms-gray-70)', fontSize: '0.95rem'}}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Microsoft Certifications */}
      <div className="about-section" style={{background: 'var(--ms-gray-10)'}}>
        <h2>Microsoft Certifications</h2>
        <p style={{color: 'var(--ms-gray-70)', marginBottom: '2rem'}}>
          Our team maintains the highest level of Microsoft certification to ensure 
          we're delivering solutions that leverage the latest features and best practices.
        </p>
        
        <div className="ms-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="ms-col-6">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'white',
                border: '1px solid var(--ms-gray-30)',
                borderRadius: '6px'
              }}>
                <div style={{fontSize: '1.5rem'}}>{cert.icon}</div>
                <div>
                  <h4 style={{fontSize: '1rem', marginBottom: '0.25rem'}}>{cert.name}</h4>
                  <div style={{fontSize: '0.85rem', color: 'var(--ms-gray-60)'}}>
                    Validated Microsoft Expertise
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamics 365 Journey */}
      <div className="about-section">
        <h2>The Dynamics 365 Journey</h2>
        <p style={{color: 'var(--ms-gray-70)', marginBottom: '2rem'}}>
          Following Microsoft's innovation in business applications from the beginning
        </p>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  background: 'var(--ms-blue)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  minWidth: '60px'
                }}>
                  {milestone.year}
                </div>
                <h4 style={{margin: 0}}>{milestone.title}</h4>
              </div>
              <p style={{color: 'var(--ms-gray-70)', marginLeft: '5rem'}}>
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Get in Touch */}
      <div className="about-section" style={{textAlign: 'center'}}>
        <h2>Partner With Us</h2>
        <p style={{color: 'var(--ms-gray-70)', maxWidth: '800px', margin: '0 auto 2rem'}}>
          Whether you're starting your Dynamics 365 journey or looking to optimize 
          existing implementations, our team is ready to help you achieve your business goals.
        </p>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button className="cta-button">Schedule a Consultation</button>
          <button className="cta-button secondary">View Case Studies</button>
          <button className="cta-button secondary">Join Our Webinar</button>
        </div>
      </div>
    </div>
  );
};

export default About;