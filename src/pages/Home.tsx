import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoadmapCard from '../components/RoadmapCard';

const roadmaps = [
  {
    title: 'Data Structures Fundamentals',
    description: 'Master the essential data structures: arrays, linked lists, stacks, and queues.',
    difficulty: 'Beginner',
    topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
    progress: 2
  },
  {
    title: 'Advanced Data Structures',
    description: 'Learn complex data structures: trees, graphs, and hash tables.',
    difficulty: 'Intermediate',
    topics: ['Trees', 'Graphs', 'Hash Tables', 'Heaps'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    progress: 1
  },
  {
    title: 'Algorithm Mastery',
    description: 'Deep dive into advanced algorithms and problem-solving techniques.',
    difficulty: 'Advanced',
    topics: ['Dynamic Programming', 'Greedy Algorithms', 'Backtracking', 'Graph Algorithms'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    progress: 0
  }
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <SearchBar />
        </div>

        <section id="roadmaps">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Roadmaps</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {roadmaps.map((roadmap, index) => (
              <RoadmapCard
                key={index}
                {...roadmap}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}