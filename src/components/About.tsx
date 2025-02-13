import React from 'react';
import { Target, Rocket, Cpu, Code, Users, Video, PenTool, DollarSign } from 'lucide-react';
import 'src/fonts/fonts.css';

const About = () => {
  const technicalDomains = [
    { icon: <Target className="h-6 w-6 text-orange-500" />, title: "Aerodynamics", description: "Focuses on the study and optimization of airflow over aircraft structures." },
    { icon: <Rocket className="h-6 w-6 text-orange-500" />, title: "CAD/CAM/CAE", description: "Utilizes advanced software tools for computer-aided design, manufacturing, and engineering analysis." },
    { icon: <Cpu className="h-6 w-6 text-orange-500" />, title: "Avionics (RC + AI/ML)", description: "Developing intelligent control systems and remote-controlled technologies for aerospace applications." },
    { icon: <Code className="h-6 w-6 text-orange-500" />, title: "Web Development", description: "Building and maintaining the club's digital presence through modern web technologies." },
  ];

  const nonTechnicalDomains = [
    { icon: <DollarSign className="h-6 w-6 text-orange-500" />, title: "PR, Management & Finance", description: "Handling public relations, financial planning, and overall management of club activities." },
    { icon: <Video className="h-6 w-6 text-orange-500" />, title: "Graphic Design & Videography", description: "Creating engaging visual content and documenting club activities through media." },
    { icon: <PenTool className="h-6 w-6 text-orange-500" />, title: "Content Writing", description: "Developing technical and promotional content for various club initiatives." },
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">About Aerotech</h1>
          <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
            <h2 className="text-2xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
            Welcome to AeroTech!  The official aviation club of VSSUT Burla. We are a passionate group of aviation enthusiasts dedicated to the world of UAV and drones. Our club is a place where like-minded individuals can share their innovative ideas and use their theoretical and practical knowledge towards innovation in the field of aviation.
On 3rd November 2021, a group of 11 aviation enthusiasts at VSSUT Burla gathered with a shared vision, and AeroTech was formed. Since its inception our club has participated in numerous competitions across India, delivering outstanding performances against all odds. Now we stand with more than 100 enthusiasts. 
Guided by our motto, "Fly Above and Beyond" AeroTech offers unparalleled opportunities for practical learning, networking, and professional growth in different technical & non-technical fields within the club

            </p>
          </div>
        </div>
      </div>

      {/* Technical Domains */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Technical Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalDomains.map((domain, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Domains */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">Non-Technical Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonTechnicalDomains.map((domain, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
