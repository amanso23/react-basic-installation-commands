import { useState, useCallback } from 'react';
import { Copy, ExternalLink, CheckCircle, Terminal, Sun, Moon } from 'lucide-react';
import { commands } from './data/commands';
import Footer from './components/Footer';

function App() {
  const [filter, setFilter] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white text-gray-800'} flex flex-col items-center p-8 transition-colors duration-300`}>
      <button
          onClick={toggleDarkMode}
          className={`fixed top-0 right-0 m-2  ${isDarkMode ? 'text-yellow-400' : 'text-gray-800'} transition-colors duration-300`}
        >
        {isDarkMode ? <Sun size={23} /> : <Moon size={23} />}
      </button>
      <header className="mb-12 relative">
        <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          React Installation Commands 
        </h1>
        <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Quick access to essential React setup commands
        </p>
      </header>

      <div className="w-full max-w-3xl mb-8 relative">
        <input
          type="text"
          placeholder="Filter commands..."
          className={`w-full p-4 pl-12 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Terminal
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
          size={20}
        />
      </div>

      <div className="w-full max-w-3xl space-y-6">
        {filteredCommands.length > 0 ? filteredCommands.map((cmd, index) => (
          <div
            key={index}
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50'}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {cmd.name}
              </h2>
              <a
                href={cmd.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} flex items-center transition-colors duration-200`}
              >
                Official Page <ExternalLink className="ml-1" size={18} />
              </a>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-md flex justify-between items-center overflow-x-auto`}>
              <code className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {cmd.command}
              </code>
              <button
                onClick={() => copyToClipboard(cmd.command, index)}
                className={`ml-4 px-3 py-1.5 rounded-md flex items-center transition-all duration-300 ${
                  copiedIndex === index
                    ? 'bg-green-600 text-white'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
        )) : <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>Sin resultados</p>}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;