import { useState, useCallback } from 'react';
import { Copy, ExternalLink, CheckCircle, Terminal } from 'lucide-react';
import { commands } from './data/commands';

function App() {
  const [filter, setFilter] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(filter.toLowerCase()) ||
      cmd.command.toLowerCase().includes(filter.toLowerCase())
  );

  const copyToClipboard = useCallback(async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 flex flex-col items-center p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">
          React Installation Commands
        </h1>
        <p className="text-xl text-gray-400">
          Quick access to essential React setup commands
        </p>
      </header>

      <div className="w-full max-w-3xl mb-8 relative">
        <input
          type="text"
          placeholder="Filter commands..."
          className="w-full p-4 pl-12 rounded-full bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"
          onChange={(e) => setFilter(e.target.value)}
        />
        <Terminal
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {filteredCommands.map((cmd, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-750"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-200">
                {cmd.name}
              </h2>
              <a
                href={cmd.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 flex items-center transition-colors duration-200"
              >
                Official Page <ExternalLink className="ml-1" size={18} />
              </a>
            </div>
            <div className="bg-gray-900 p-4 rounded-md flex justify-between items-center overflow-x-auto">
              <code className="text-sm font-mono text-gray-300">
                {cmd.command}
              </code>
              <button
                onClick={() => copyToClipboard(cmd.command, index)}
                className={`ml-4 px-3 py-1.5 rounded-md flex items-center transition-all duration-300 ${
                  copiedIndex === index
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title="Copy to clipboard"
              >
                {copiedIndex === index ? (
                  <>
                    <CheckCircle size={16} className="mr-1" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-1" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
