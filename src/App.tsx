import { useState } from 'react';
import { Terminal, Sun, Moon } from 'lucide-react';
import { commands } from './data/commands';
import Footer from './components/Footer';
import EditableCard from './components/EditableCard';

function App() {
  const [filter, setFilter] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(filter.toLowerCase()) ||
      cmd.command.toLowerCase().includes(filter.toLowerCase())
  );


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? ' bg-gradient-to-br from-dark-blue via-darker-blue to-gray-blue animate-gradient-x' : 'bg-gradient-to-br from-gray-100 to-white text-gray-800'} flex flex-col items-center p-8 transition-colors duration-300`}>
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
          <EditableCard initialContent={cmd.command} isDarkMode={isDarkMode} name={cmd.name} link={cmd.link} key={index}/>
        )) : <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>Sin resultados</p>}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;