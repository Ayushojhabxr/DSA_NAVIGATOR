import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-xl w-full mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          placeholder="Search topics, problems, or concepts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {query && (
        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <p className="text-sm text-gray-500">
              Quick results will appear here...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}