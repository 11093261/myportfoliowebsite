import React, { useEffect, useRef } from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoMail, IoCall, IoLocation } from 'react-icons/io5';

const Contact = () => {
  const contactRef = useRef(null);
  
  const socialLinks = [
    { 
      icon: <IoLogoFacebook className="text-2xl" />, 
      label: "Facebook",
      url: "https://facebook.com",
      color: "text-blue-600 hover:text-blue-500"
    },
    { 
      icon: <IoLogoInstagram className="text-2xl" />, 
      label: "Instagram",
      url: "https://instagram.com",
      color: "text-pink-600 hover:text-pink-500"
    },
    { 
      icon: <IoLogoLinkedin className="text-2xl" />, 
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "text-blue-500 hover:text-blue-400"
    }
  ];

  const contactInfo = [
    {
      icon: <IoCall className="text-2xl text-red-500" />,
      label: "Phone",
      value: "+234 8086622565",
      link: "tel:+2348086622565"
    },
    {
      icon: <IoMail className="text-2xl text-red-500" />,
      label: "Email",
      value: "okechukwugodstime75@gmail.com",
      link: "mailto:okechukwugodstime75@gmail.com"
    },
    {
      icon: <IoLocation className="text-2xl text-red-500" />,
      label: "Location",
      value: "Nigeria",
      link: "https://maps.google.com/?q=Nigeria"
    }
  ];

  // Handle scroll to contact section when page loads with #contact in URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact' && contactRef.current) {
        scrollToContact();
      }
    };
    
    // Check on initial load
    if (window.location.hash === '#contact') {
      setTimeout(scrollToContact, 100); // Small delay to ensure DOM is ready
    }
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to contact section with proper offset
  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -80; // Adjust for fixed header height
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="contact" 
      ref={contactRef}
      className="w-full py-12 md:py-20 bg-gradient-to-br from-blue-900 to-purple-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white inline-block pb-2 border-b-4 border-red-500">
            Contact
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with me for collaborations, job opportunities, or just to say hello!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-start group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-bold text-white mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`${social.color} bg-gray-900 p-3 rounded-full transition-all hover:bg-gray-800 hover:scale-110`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6">Send me a message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Okechukwu Godstime. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;