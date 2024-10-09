import { Command } from '../types';

export const commands: Command[] = [
  {
    name: 'Vite React',
    command: 'npm create vite@latest my-react-app -- --template react-ts',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Tailwind CSS',
    command:
      'npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
    link: 'https://tailwindcss.com/docs/guides/vite',
  },
  {
    name: 'React Router DOM',
    command: 'npm install react-router-dom',
    link: 'https://reactrouter.com/',
  },
  {
    name: 'Lucide React',
    command: 'npm install lucide-react',
    link: 'https://lucide.dev/',
  },
  {
    name: 'Emoji Mart',
    command: 'npm install emoji-mart @emoji-mart/data @emoji-mart/react',
    link: 'https://github.com/missive/emoji-mart',
  },
  {
    name: 'React Query',
    command: 'npm install @tanstack/react-query',
    link: 'https://tanstack.com/query/latest',
  },
  {
    name: 'Axios',
    command: 'npm install axios',
    link: 'https://axios-http.com/',
  },
  {
    name: 'Framer Motion',
    command: 'npm install framer-motion',
    link: 'https://www.framer.com/motion/',
  },
];
