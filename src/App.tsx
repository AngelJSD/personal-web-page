import React from 'react';
import { Github, Linkedin, ChevronDown, Laptop, Server, Palette } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { SkillCard } from './components/SkillCard';
import { AnimatedBackground } from './components/AnimatedBackground';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900">
        <AnimatedBackground />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 animate-glow">
            <span className="inline-block text-sm md:text-base text-blue-400 font-medium tracking-wider uppercase animate-slide-down">
              Software Engineer
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
            <span className="relative inline-block animate-title before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-blue-700 before:blur-lg before:opacity-30 before:-z-10">
              AngelJSD
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:500ms]">
            Crafting exceptional digital experiences with modern web technologies
          </p>
          <div className="flex gap-6 justify-center mb-16 animate-fade-in opacity-0 [animation-delay:750ms]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 hover:text-blue-400 transition-all duration-300 hover:scale-110 bg-gray-800/50 rounded-full">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 hover:text-blue-400 transition-all duration-300 hover:scale-110 bg-gray-800/50 rounded-full">
              <Linkedin size={24} />
            </a>
          </div>
          <ChevronDown size={32} className="animate-bounce mx-auto text-blue-400" />
        </div>
      </header>

      {/* Skills Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-400 pb-2">Core Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              Icon={Laptop}
              title="Frontend Development"
              skills="React, TypeScript, Tailwind CSS"
            />
            <SkillCard
              Icon={Server}
              title="Backend Development"
              skills="AWS, Node.js, hapi.js, PostgreSQL, REST APIs"
            />
            <SkillCard
              Icon={Palette}
              title="UI/UX Design"
              skills="Responsive Design, Animations, Accessibility"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-400 pb-2">Experience</span>
          </h2>
          <div className="space-y-12">
            <div className="group relative bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900/70 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Senior Full Stack Developer</h3>
                <span className="text-gray-400">2020 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">Led development of enterprise web applications, mentored junior developers, and implemented modern CI/CD practices.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 px-4">
        <ContactForm />
      </AnimatedSection>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 AngelJSD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;