import React from 'react';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Master Data Structures & Algorithms
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Your structured path to mastering DSA. From basic arrays to advanced graph algorithms,
                  learn with hands-on practice and expert guidance.
                </p>
                <div className="mt-6">
                  <a
                    href="#roadmaps"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-6">
                <div className="grid grid-cols-3 gap-6">
                  <Feature
                    icon={<BookOpen className="h-6 w-6" />}
                    title="Structured Learning"
                    description="Follow our carefully crafted roadmaps"
                  />
                  <Feature
                    icon={<Code2 className="h-6 w-6" />}
                    title="Practice Problems"
                    description="Solve curated coding challenges"
                  />
                  <Feature
                    icon={<GraduationCap className="h-6 w-6" />}
                    title="Career Growth"
                    description="Prepare for tech interviews"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Coding workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-white">{title}</p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-400">{description}</dd>
    </div>
  );
}