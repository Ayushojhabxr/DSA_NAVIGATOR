import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface RoadmapCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  image: string;
  progress?: number;
}

export default function RoadmapCard({ 
  title, 
  description, 
  difficulty, 
  topics, 
  image,
  progress = 0 
}: RoadmapCardProps) {
  const difficultyColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  }[difficulty];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <ProgressBar progress={progress} total={topics.length} />
        </div>
        <a href="#"><button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Continue Learning
          <ArrowRight className="ml-2 h-4 w-4" />
        </button></a>
      </div>
    </div>
  );
}