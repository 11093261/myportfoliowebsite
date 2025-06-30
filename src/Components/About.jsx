import React, { useEffect, useRef } from 'react';
import myprofile from "../Image/myprofile.png";
import Certificate from "../Image/Certificate.png";

const About = () => {
  const aboutRef = useRef(null);
  
  const skills = [
    { name: "HTML", percentage: 90, color: "bg-green-500" },
    { name: "CSS", percentage: 90, color: "bg-green-500" },
    { name: "Tailwindcss", percentage: 80, color: "bg-green-500" },
    { name: "Javascript", percentage: 80, color: "bg-green-500" },
    { name: "React.Js", percentage: 80, color: "bg-green-500" },
    { name: "Node.Js", percentage: 50, color: "bg-red-500" },
    { name: "Express.Js", percentage: 70, color: "bg-blue-500" },
    { name: "MongoDB", percentage: 60, color: "bg-blue-500" },
    { name: "Redis", percentage: 40, color: "bg-red-500" },
  ];

  const experiences = [
    {
      title: "Full Stack Web Development Trainee",
      organization: "IDEAS World Bank Program / Learn Factory Nigeria",
      period: "2024-2025",
      certificate: Certificate
    },
    {
      title: "Computer Instructor Volunteer",
      organization: "Power Computer Learning Isialangwa Aba",
      period: "2025"
    }
  ];

  // Handle scroll to about section when page loads with #about in URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about' && aboutRef.current) {
        scrollToAbout();
      }
    };
    
    // Check on initial load
    if (window.location.hash === '#about') {
      setTimeout(scrollToAbout, 100); // Small delay to ensure DOM is ready
    }
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to about section with proper offset
  const scrollToAbout = () => {
    if (aboutRef.current) {
      const yOffset = -80; // Adjust for fixed header height
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="about" 
      ref={aboutRef}
      className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-950 w-full py-10 px-4 md:px-8 scroll-mt-16"
    >
      {/* Add top padding to create space for fixed header */}
      <div className="max-w-6xl mx-auto pt-20"> {/* Increased top padding */}
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white inline-block pb-2 border-b-4 border-red-500">
            About
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              I am a Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Building Scalable Solutions at the Intersection of Design & Logic. I architect robust web applications with modern stacks and intuitive UX. With a passion for clean code and user-centric design, I create solutions that solve real-world problems while maintaining elegant simplicity.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img 
                src={myprofile} 
                alt="Profile" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-red-500 shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  ME
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white inline-block pb-2 border-b-4 border-red-500">
              Skills
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-4 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-gray-200">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`${skill.color} h-3 rounded-full`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white inline-block pb-2 border-b-4 border-red-500">
              Experience
            </h1>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-300 mb-3">{exp.organization}</p>
                  <p className="text-gray-400 italic">{exp.period}</p>
                </div>
                
                {exp.certificate && (
                  <div className="md:w-1/3 flex items-center justify-center p-4 bg-gray-900">
                    <img 
                      src={exp.certificate} 
                      alt="Certificate" 
                      className="max-h-48 object-contain rounded-lg border border-gray-700"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12 pb-8">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;