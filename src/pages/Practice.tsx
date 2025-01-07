import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const languages = ['javascript', 'python', 'cpp', 'java'];

const defaultCode = {
  javascript: '// Write your code here\nconsole.log("Hello World!");',
  python: '# Write your code here\nprint("Hello World!")',
  cpp: '// Write your code here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World!";\n    return 0;\n}',
  java: '// Write your code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}'
};

export default function Practice() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(defaultCode[language as keyof typeof defaultCode]);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(defaultCode[newLanguage as keyof typeof defaultCode]);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    // Simulate code execution (in a real app, this would connect to a backend)
    setTimeout(() => {
      setOutput('Output:\n' + code);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center space-x-4">
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="block w-48 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          onClick={runCode}
          disabled={isRunning}
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-[600px] border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />
        </div>
        <div className="h-[600px] border rounded-lg overflow-hidden bg-gray-900 text-white p-4">
          <div className="font-mono whitespace-pre-wrap">{output}</div>
        </div>
      </div>
    </div>
  );
}