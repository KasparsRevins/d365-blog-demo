import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const About = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    projectType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const services = [
    {
      id: 1,
      title: "Dynamics 365 Implementation",
      icon: "🚀",
      description: "End-to-end implementation of Dynamics 365 modules"
    },
    {
      id: 2,
      title: "Custom Development",
      icon: "⚙️",
      description: "Custom solutions using Power Platform and Azure"
    },
    {
      id: 3,
      title: "Migration Services",
      icon: "🔄",
      description: "Migrate from legacy systems to Dynamics 365"
    },
    {
      id: 4,
      title: "Training & Support",
      icon: "🎓",
      description: "User training and ongoing support packages"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = [];

    if (!formData.firstName.trim()) {
      errors.push("First name is required.");
    }
    if (!formData.lastName.trim()) {
      errors.push("Last name is required.");
    }
    if (!formData.email.trim()) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Invalid email format.");
    }
    if (!formData.company.trim()) {
      errors.push("Company name is required.");
    }
    if (!formData.message.trim()) {
      errors.push("Project description is required.");
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();
    if (errors.length > 0) {
      toast.error(errors[0]);
      setIsSubmitting(false);
      return;
    }

    try {
      // In production, replace with your actual API endpoint
      // const response = await axios.post('YOUR_API_ENDPOINT', formData);
      
      // For demo purposes, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you! We've received your inquiry and will contact you within 24 hours.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        projectType: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="about">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className="hero">
        <h1>About Dynamics 365 Insights</h1>
        <p>
          We are a team of Microsoft-certified experts dedicated to helping organizations 
          maximize their investment in Dynamics 365. Our mission is to provide authoritative, 
          practical guidance for businesses navigating digital transformation.
        </p>
      </section>

      {/* Work with Me Section */}
      <div className="about-section" style={{borderLeft: '4px solid var(--ms-blue)'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem'}}>
          <div style={{
            background: 'var(--ms-blue)', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '8px',
            fontSize: '1.5rem'
          }}>
            👋
          </div>
          <div>
            <h2>Work With Me</h2>
            <p style={{color: 'var(--ms-gray-70)'}}>
              Hi, I'm Lead Solutions Architect. I help businesses build and improve 
              their Dynamics 365 systems - from implementation to optimization, integrations, and legacy upgrades.
            </p>
            <p style={{color: 'var(--ms-gray-70)', marginTop: '0.5rem'}}>
              I'm currently available for consulting, freelance work, and long-term partnerships.
            </p>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
              <button 
                className="cta-button"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </button>
              <a 
                href="mailto:sarah@dynamics365insights.com" 
                className="cta-button secondary"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

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
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {services.map(service => (
            <div key={service.id} style={{
              background: 'white',
              border: '1px solid var(--ms-gray-30)',
              borderRadius: '6px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>{service.icon}</div>
              <h4>{service.title}</h4>
              <p style={{color: 'var(--ms-gray-70)', fontSize: '0.95rem'}}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="about-section">
        <h2>Start Your Dynamics 365 Project</h2>
        <p style={{color: 'var(--ms-gray-70)', marginBottom: '2rem'}}>
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        
        <div style={{
          background: 'white',
          border: '1px solid var(--ms-gray-30)',
          borderRadius: '8px',
          padding: '2rem'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--ms-gray-90)'
              }}>
                Name *
              </label>
              <div style={{display: 'flex', gap: '1rem'}}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid var(--ms-gray-30)',
                    borderRadius: '4px',
                    fontSize: '0.95rem'
                  }}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid var(--ms-gray-30)',
                    borderRadius: '4px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--ms-gray-90)'
              }}>
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ms-gray-30)',
                  borderRadius: '4px',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: 'var(--ms-gray-90)'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--ms-gray-30)',
                    borderRadius: '4px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: 'var(--ms-gray-90)'
                }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--ms-gray-30)',
                    borderRadius: '4px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--ms-gray-90)'
              }}>
                Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ms-gray-30)',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  background: 'white'
                }}
              >
                <option value="">Select a service</option>
                <option value="implementation">Dynamics 365 Implementation</option>
                <option value="customization">Custom Development</option>
                <option value="migration">System Migration</option>
                <option value="integration">API Integration</option>
                <option value="training">Training & Support</option>
                <option value="consulting">Strategy Consulting</option>
              </select>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--ms-gray-90)'
              }}>
                Project Type
              </label>
              <div style={{display: 'flex', gap: '2rem'}}>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <input
                    type="radio"
                    name="projectType"
                    value="new"
                    checked={formData.projectType === "new"}
                    onChange={handleChange}
                  />
                  <span>New Implementation</span>
                </label>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <input
                    type="radio"
                    name="projectType"
                    value="upgrade"
                    checked={formData.projectType === "upgrade"}
                    onChange={handleChange}
                  />
                  <span>Upgrade/Optimization</span>
                </label>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <input
                    type="radio"
                    name="projectType"
                    value="support"
                    checked={formData.projectType === "support"}
                    onChange={handleChange}
                  />
                  <span>Ongoing Support</span>
                </label>
              </div>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: 'var(--ms-gray-90)'
              }}>
                Project Description *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and budget..."
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--ms-gray-30)',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit" 
              className="cta-button"
              disabled={isSubmitting}
              style={{width: '100%', opacity: isSubmitting ? 0.7 : 1}}
            >
              {isSubmitting ? 'Sending...' : 'Submit Project Inquiry'}
            </button>
            
            <p style={{
              marginTop: '1rem',
              fontSize: '0.875rem',
              color: 'var(--ms-gray-60)',
              textAlign: 'center'
            }}>
              We respect your privacy. Your information will only be used to contact you about your project.
            </p>
          </form>
        </div>
      </div>

      {/* Get in Touch - Alternative Methods */}
      <div className="about-section" style={{textAlign: 'center'}}>
        <h2>Other Ways to Connect</h2>
        <p style={{color: 'var(--ms-gray-70)', maxWidth: '800px', margin: '0 auto 2rem'}}>
          Prefer to connect differently? Here are other ways to reach our team.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{
            background: 'white',
            border: '1px solid var(--ms-gray-30)',
            borderRadius: '6px',
            padding: '1.5rem'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📧</div>
            <h4>Email Us</h4>
            <a 
              href="mailto:contact@dynamics365insights.com" 
              style={{color: 'var(--ms-blue)', textDecoration: 'none'}}
            >
              contact@dynamics365insights.com
            </a>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid var(--ms-gray-30)',
            borderRadius: '6px',
            padding: '1.5rem'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
            <h4>Call Us</h4>
            <p style={{color: 'var(--ms-gray-70)'}}>
              +1 (555) 123-4567<br/>
              Mon-Fri, 9AM-6PM EST
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid var(--ms-gray-30)',
            borderRadius: '6px',
            padding: '1.5rem'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💼</div>
            <h4>LinkedIn</h4>
            <a 
              href="https://linkedin.com/company/dynamics365insights" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: 'var(--ms-blue)', textDecoration: 'none'}}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Microsoft Resources */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.1) 0%, rgba(243, 242, 241, 0.9) 100%)',
        border: '1px solid var(--ms-gray-30)',
        color: 'var(--ms-gray-90)',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{
            background: 'rgba(0, 120, 212, 0.1)',
            color: 'var(--ms-blue)',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            Official Resources
          </div>
          <h3 style={{marginBottom: '0.5rem'}}>Connect with Microsoft</h3>
          <p style={{color: 'var(--ms-gray-70)'}}>
            Access official documentation, training, and community resources directly from Microsoft
          </p>
        </div>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <a 
            href="https://learn.microsoft.com/en-us/dynamics365/" 
            className="cta-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a 
            href="https://community.dynamics.com/" 
            className="cta-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;