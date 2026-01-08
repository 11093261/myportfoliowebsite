import React, { useEffect, useRef } from 'react';
import projectone from "../Image/projectone.png";
import projecttwo from "../Image/projecttwo.png";

const Project = () => {
  const projectsRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "shopspher",
      description: "Full-featured online shopping platform with product management and payment processing",
      stack: "React.Js, Tailwind, Express.Js, MongoDB, Paystack, AWS, CI/CD, Socket.io",
      image: projectone,
      link: "https://www.shopspher.com" // Updated link
    },
    {
      id: 2,
      title: "Sign Language Recognition",
      description: "AI-powered app that translates sign language to text in real-time",
      stack: "React.Js, Tensorflow, React-webcam, Express.Js",
      image: projecttwo,
      link: "#"
    },
    {
      id: 3,
      title: "Ride Hailing Service",
      description: "On-demand transportation platform with real-time tracking and payments",
      stack: "React.Js, Tailwind, Express.Js, MongoDB, OpenStreetMap",
      image: null,
      link: "#"
    },
    {
      id: 4,
      title: "Virtual Wardrobe",
      description: "AI fashion assistant that suggests outfits based on your wardrobe",
      stack: "React.Js, Tensorflow, Express.Js, MongoDB",
      image: null,
      link: "#"
    },
    {
      id: 4,
      title: "Virtual Wardrobe",
      description: "AI fashion assistant that suggests outfits based on your wardrobe",
      stack: "React.Js, Tensorflow, Express.Js, MongoDB",
      image: null,
      link: "https://affiliate-marketing-bay.vercel.app"
+1
    }
    
  ];

  // Handle scroll to projects section when page loads with #projects in URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#projects' && projectsRef.current) {
        scrollToProjects();
      }
    };
    
    // Check on initial load
    if (window.location.hash === '#projects') {
      setTimeout(scrollToProjects, 100); // Small delay to ensure DOM is ready
    }
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to projects section with proper offset
  const scrollToProjects = () => {
    if (projectsRef.current) {
      const yOffset = -80; // Adjust for fixed header height
      const y = projectsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Handle project link click
  const handleProjectClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      id="projects" 
      ref={projectsRef}
      className="w-full py-16 bg-gradient-to-br from-purple-800 to-blue-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white inline-block pb-2 border-b-4 border-red-500">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my recent work showcasing full-stack development skills and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <p className="text-sm font-medium">Project Preview</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>

              {/* Project Info */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-green-400 font-semibold text-sm mb-1">Project Stack</p>
                  <p className="text-gray-400 text-xs">{project.stack}</p>
                </div>
                
                <button 
                  onClick={() => handleProjectClick(project.link)}
                  className="w-full py-2 px-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-[1.03]"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300 transform hover:scale-105 focus:outline-none">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;