import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Copy, CheckCircle } from 'lucide-react';

interface EditableCardProps {
  initialContent: string;
  isDarkMode: boolean;
  name: string;
  link: string;
  packageManager: string;
}




const EditableCard: React.FC<EditableCardProps> = ({ initialContent, isDarkMode, name, link, packageManager }) => {
  const [content, setContent] = useState(initialContent)
  const [isEditing, setIsEditing] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

 
  useEffect(() => {
    setContent((prevContent) => {
      const contentWithoutPackageManager = prevContent.replace(/^(npm|yarn|pnpm)\s/, '');
      return `${packageManager} ${contentWithoutPackageManager}`;
    });
  }, [packageManager]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(`${packageManager} ${newContent.replace(/^(npm|yarn|pnpm)\s/, '')}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl relative ${isDarkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50'}`}
      onDoubleClick={handleDoubleClick}
      onMouseOver={() => {setShowTooltip(true)}}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {name}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} flex items-center transition-colors duration-200 whitespace-nowrap`}
        >
          Documentación <ExternalLink className="ml-1" size={18} />
        </a>
      </div>
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-md flex justify-between items-center overflow-x-auto`}>
        {isEditing ? (
          <textarea
            ref={textareaRef}
            value={content.replace(/^(npm|yarn|pnpm)\s/, '')}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full resize-none outline-none bg-transparent ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-mono`}
          />
        ) : (
          <code className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {content}
          </code>
        )}
        <button
          onClick={copyToClipboard}
          className={`ml-4 px-3 py-1.5 rounded-md flex items-center transition-all duration-300 ${
            isCopied
              ? 'bg-green-600 text-white'
              : isDarkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          title="Copiar al portapapeles"
        >
          {isCopied ? (
            <>
              <CheckCircle size={16} className="mr-1" />
              <span className="text-sm">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={16} className="mr-1" />
              <span className="text-sm">Copiar</span>
            </>
          )}
        </button>
      </div>
      {showTooltip && !isEditing && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 mt-2">
          <div className="bg-gray-800 text-white text-xs rounded py-2 px-2 relative">
            Doble clic para editar
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCard;