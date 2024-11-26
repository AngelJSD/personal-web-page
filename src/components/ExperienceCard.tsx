import React from 'react';

interface ExperienceCardProps {
  jobTitle: string;
  start: string;
  end: string;
  description: string;
  skills: Array<string>;
}

export function ExperienceCard({ jobTitle, start, end, description, skills }: ExperienceCardProps) {
  return (
    <div className="space-y-12">
      <div className="group relative bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-xl font-semibold text-blue-400">{jobTitle}</h3>
          <span className="text-gray-400">{`${start} - ${end}`}</span>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}