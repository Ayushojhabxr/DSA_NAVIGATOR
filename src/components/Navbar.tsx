import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code2, Compass, GraduationCap, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Compass className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">DSA Navigator</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" icon={<BookOpen className="w-4 h-4" />} text="Learn" />
              <NavLink to="/practice" icon={<Code2 className="w-4 h-4" />} text="Practice" />
              <NavLink to="/lectures" icon={<GraduationCap className="w-4 h-4" />} text="Lectures" />
              <a
                href="https://leetcode.com/problemset/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Code2 className="w-4 h-4 mr-2" />
                LeetCode
              </a>
              {user && (
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Logout ({user.username})
                </button>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" icon={<BookOpen className="w-4 h-4" />} text="Learn" />
            <MobileNavLink to="/practice" icon={<Code2 className="w-4 h-4" />} text="Practice" />
            <MobileNavLink to="/lectures" icon={<GraduationCap className="w-4 h-4" />} text="Lectures" />
            <a
              href="https://leetcode.com/problemset/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <Code2 className="w-4 h-4 mr-2" />
              LeetCode
            </a>
            {user && (
              <button
                onClick={logout}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Logout ({user.username})
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);