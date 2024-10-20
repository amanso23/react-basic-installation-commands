const Footer = ({isDarkMode}:{isDarkMode: boolean}) => {
    return (
        <footer className='mt-6 max-w-3xl  '>
            <p className={`text-xs md:text-sm ${isDarkMode ? `text-white` : `text-black`}` }>
                Esta página es puramente informativa, creada para facilitar el acceso a los comandos esenciales de instalación de React.
                Desarrollada con <span className='underline text-cyan-300'>React</span> y <span className='underline text-blue-500'>TypeScript</span>.
            </p>
        </footer>
    )
}

export default Footer