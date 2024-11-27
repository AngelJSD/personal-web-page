import React, { ReactNode } from 'react';

interface SkillCardProps {
  badge: ReactNode;
  title: string;
  skills: string;
}

export function CertificationCard({ badge, title, skills }: SkillCardProps) {
  return (
    <div className="group bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 flex flex-col items-center">
      {badge}
      <h3 className="text-xl font-semibold my-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{skills}</p>
    </div>
  );
}