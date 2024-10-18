import { Command } from '../types';

export const commands: Command[] = [
  {
    name: 'Vite React',
    command: 'create vite@latest my-react-app -- --template react-ts',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Tailwind CSS',
    command: 'install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
    link: 'https://tailwindcss.com/docs/guides/vite',
  },
  {
    name: 'React Router DOM',
    command: 'install react-router-dom',
    link: 'https://reactrouter.com/',
  },
  {
    name: 'Lucide React',
    command: 'install lucide-react',
    link: 'https://lucide.dev/',
  },
  {
    name: 'Emoji Mart',
    command: 'install emoji-mart @emoji-mart/data @emoji-mart/react',
    link: 'https://github.com/missive/emoji-mart',
  },
  {
    name: 'React Query',
    command: 'install @tanstack/react-query',
    link: 'https://tanstack.com/query/latest',
  },
  {
    name: 'Axios',
    command: 'install axios',
    link: 'https://axios-http.com/',
  },
  {
    name: 'Framer Motion',
    command: 'install framer-motion',
    link: 'https://www.framer.com/motion/',
  },
  {
    name: 'Zustand (Manejo de estado)',
    command: 'install zustand',
    link: 'https://zustand-demo.pmnd.rs/',
  },
  {
    name: 'React i18next (Internacionalización)',
    command: 'install react-i18next i18next',
    link: 'https://react.i18next.com/',
  },
  {
    name: 'Styled Components',
    command: 'install styled-components',
    link: 'https://styled-components.com/',
  },
  {
    name: 'Jest (Testing)',
    command: 'install --save-dev jest @testing-library/react @testing-library/jest-dom',
    link: 'https://jestjs.io/',
  },
  {
    name: 'ESLint (Linter)',
    command: 'install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb',
    link: 'https://eslint.org/',
  },
  {
    name: 'Prettier (Formatteo de código)',
    command: 'install --save-dev prettier eslint-config-prettier eslint-plugin-prettier',
    link: 'https://prettier.io/',
  },
  {
    name: 'Heroicons (Iconos para Tailwind)',
    command: 'install @heroicons/react',
    link: 'https://heroicons.com/',
  },
  {
    name: 'React Helmet (SEO)',
    command: 'install react-helmet-async',
    link: 'https://github.com/staylor/react-helmet-async',
  },
  {
    name: 'Redux Toolkit (Manejo de estado avanzado)',
    command: 'install @reduxjs/toolkit react-redux',
    link: 'https://redux-toolkit.js.org/',
  },
]
