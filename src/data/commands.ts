import { Command } from '../types';

export const commands: Command[] = [
  {
    id: 1,
    name: 'Vite React',
    command: 'create vite@latest my-react-app -- --template react-ts',
    link: 'https://vitejs.dev/',
  },
  {
    id: 2,
    name: 'Tailwind CSS',
    command: 'install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
    link: 'https://tailwindcss.com/docs/guides/vite',
  },
  {
    id: 3,
    name: 'React Router DOM',
    command: 'install react-router-dom',
    link: 'https://reactrouter.com/',
  },
  {
    id: 4,
    name: 'Lucide React',
    command: 'install lucide-react',
    link: 'https://lucide.dev/',
  },
  {
    id: 5,
    name: 'Emoji Mart',
    command: 'install emoji-mart @emoji-mart/data @emoji-mart/react',
    link: 'https://github.com/missive/emoji-mart',
  },
  {
    id: 6,
    name: 'React Query',
    command: 'install @tanstack/react-query',
    link: 'https://tanstack.com/query/latest',
  },
  {
    id: 7,
    name: 'Axios',
    command: 'install axios',
    link: 'https://axios-http.com/',
  },
  {
    id: 8,
    name: 'Framer Motion',
    command: 'install framer-motion',
    link: 'https://www.framer.com/motion/',
  },
  {
    id: 9,
    name: 'Zustand (Manejo de estado)',
    command: 'install zustand',
    link: 'https://zustand-demo.pmnd.rs/',
  },
  {
    id: 10,
    name: 'React i18next (Internacionalización)',
    command: 'install react-i18next i18next',
    link: 'https://react.i18next.com/',
  },
  {
    id: 11,
    name: 'Styled Components',
    command: 'install styled-components',
    link: 'https://styled-components.com/',
  },
  {
    id: 12,
    name: 'Jest (Testing)',
    command: 'install --save-dev jest @testing-library/react @testing-library/jest-dom',
    link: 'https://jestjs.io/',
  },
  {
    id: 13,
    name: 'ESLint (Linter)',
    command: 'install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb',
    link: 'https://eslint.org/',
  },
  {
    id: 14,
    name: 'Prettier (Formatteo de código)',
    command: 'install --save-dev prettier eslint-config-prettier eslint-plugin-prettier',
    link: 'https://prettier.io/',
  },
  {
    id: 15,
    name: 'Heroicons (Iconos para Tailwind)',
    command: 'install @heroicons/react',
    link: 'https://heroicons.com/',
  },
  {
    id: 16,
    name: 'React Helmet (SEO)',
    command: 'install react-helmet-async',
    link: 'https://github.com/staylor/react-helmet-async',
  },
  {
    id: 17,
    name: 'Redux Toolkit (Manejo de estado avanzado)',
    command: 'install @reduxjs/toolkit react-redux',
    link: 'https://redux-toolkit.js.org/',
  },
]
