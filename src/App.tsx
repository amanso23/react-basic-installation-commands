import { useEffect, useRef, useState } from 'react';
import { Terminal, Sun, Moon } from 'lucide-react';
import { commands } from './data/commands';
import Footer from './components/Footer';
import EditableCard from './components/EditableCard';
import { packageManagers } from './data/packageManagers';

function App() {
  const [filter, setFilter] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [packageManager, setPackageManager] = useState('npm')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(filter.toLowerCase()) ||
      cmd.command.toLowerCase().includes(filter.toLowerCase())
  );

 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  const selectPackageManager = (pm: string) => {
    setPackageManager(pm)
    setIsPopupOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? ' bg-gradient-to-tl from-dark-blue via-darker-blue to-gray-blue ' : 'bg-gradient-to-br from-gray-100 to-white text-gray-800'} flex flex-col items-center p-8 transition-colors duration-300`}>
      <button
          onClick={toggleDarkMode}
          className={`fixed top-0 right-0 m-2  ${isDarkMode ? 'text-yellow-400' : 'text-gray-800'} transition-colors duration-300`}
        >
        {isDarkMode ? <Sun size={23} /> : <Moon size={23} />}
      </button>
      <header className="mb-4 relative">
        <p className={`text-xl flex items-center gap-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Quick access to essential React <span><img src="https://www.svgrepo.com/show/452092/react.svg" alt="react svg" className="size-8  animate-spin-react" /></span> setup commands
        </p>
      </header>

      <div className="w-full max-w-3xl mb-8 relative">
        <input
          type="text"
          placeholder="vite react, react router dom..."
          className={`w-full p-4 pl-12 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Terminal
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
          size={20}
        />

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50" ref={popupRef} >
          <button
            onClick={togglePopup}
            className={`px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            } hover:bg-opacity-80 transition-colors duration-200 font-medium`}
          >
            {packageManager}
          </button>
          {isPopupOpen && (
            <div className={`absolute right-0 mt-2 py-1 w-32 rounded-md shadow-xl z-10 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {packageManagers.map((pm) => (
                <button
                  key={pm}
                  onClick={() => selectPackageManager(pm)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                  } ${packageManager === pm ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200') : ''} transition-colors duration-150`}
                >
                  {pm}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    
      <div className="w-full max-w-3xl space-y-6">
        {filteredCommands.length > 0 ? filteredCommands.map((cmd) => (
          <EditableCard initialContent={cmd.command} isDarkMode={isDarkMode} name={cmd.name} link={cmd.link} key={cmd.id} packageManager={packageManager}/>
        )) : <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>Sin resultados</p>}
      </div>

       

      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App;