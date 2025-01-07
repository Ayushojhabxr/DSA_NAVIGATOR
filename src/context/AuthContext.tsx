import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
  progress: {
    [key: string]: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
  updateProgress: (topicId: string, progress: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (username: string) => {
    setUser({
      username,
      progress: {},
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProgress = (topicId: string, progress: number) => {
    if (user) {
      setUser({
        ...user,
        progress: {
          ...user.progress,
          [topicId]: progress,
        },
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}