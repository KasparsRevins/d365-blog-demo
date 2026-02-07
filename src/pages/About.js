import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "D365 Solutions Architect",
      bio: "10+ years experience in ERP implementations",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CRM Specialist",
      bio: "Microsoft MVP for Business Applications",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Power Platform Expert",
      bio: "Specialized in automation and custom solutions",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <div className="about">
      <div className="about-section">
        <h1>About Dynamics 365 Insights</h1>
        <p>
          We are a team of passionate Microsoft Dynamics 365 experts dedicated to sharing 
          knowledge, best practices, and insights about the D365 ecosystem. Our mission is 
          to help organizations maximize their investment in Microsoft's powerful business 
          applications platform.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To demystify Dynamics 365 and empower businesses with practical knowledge 
          that drives digital transformation. We believe that when organizations 
          understand how to leverage D365 effectively, they can achieve remarkable 
          business outcomes.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          Meet the experts behind Dynamics 365 Insights. Our team brings together 
          decades of experience in ERP, CRM, and cloud business applications.
        </p>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.avatar} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>What We Cover</h2>
        <ul className="coverage-list">
          <li>Dynamics 365 Sales implementation strategies</li>
          <li>Customer Service automation and optimization</li>
          <li>Finance and Operations best practices</li>
          <li>Power Platform integration patterns</li>
          <li>AI and analytics in business applications</li>
          <li>Migration and upgrade guidance</li>
        </ul>
      </div>
    </div>
  );
};

export default About;