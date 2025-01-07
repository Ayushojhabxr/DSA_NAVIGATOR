import React from 'react';
import { BookOpen, Code2, GitBranch, Hash, Network, Database, Binary, Workflow } from 'lucide-react';

const lectures = [
  {
    title: 'Arrays and Strings',
    icon: <Hash className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example1',
    description: 'Master array manipulation and string algorithms',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Linked Lists',
    icon: <GitBranch className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example2',
    description: 'Deep dive into linked list operations',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Trees',
    icon: <Network className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example3',
    description: 'Explore tree data structures',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Graphs',
    icon: <Workflow className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example4',
    description: 'Learn graph algorithms and traversals',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Hash Tables',
    icon: <Database className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example5',
    description: 'Understanding hashing and collision resolution',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Dynamic Programming',
    icon: <Binary className="h-6 w-6" />,
    link: 'https://www.youtube.com/watch?v=example6',
    description: 'Master dynamic programming techniques',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export default function Lectures() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">DSA Learning Path</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lectures.map((lecture, index) => (
          <div
            key={index}
            className="group relative transform transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-75 rounded-xl shadow-lg transform rotate-6 transition-transform group-hover:rotate-4"></div>
            <div className={`relative bg-gradient-to-r ${lecture.color} rounded-xl shadow-lg p-6 transform transition-transform`}>
              <div className="text-white mb-4">
                {lecture.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{lecture.title}</h3>
              <p className="text-white/80 mb-4">{lecture.description}</p>
              <a
                href={lecture.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:underline"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Watch Lecture
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}