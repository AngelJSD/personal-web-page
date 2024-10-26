import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  Icon: LucideIcon;
  title: string;
  skills: string;
}

export function SkillCard({ Icon, title, skills }: SkillCardProps) {
  return (
    <div className="group bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
      <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{skills}</p>
    </div>
  );
}