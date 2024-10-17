import { Command } from '../types';

export const commands: Command[] = [
  {
    name: 'Vite React',
    command: 'npm create vite@latest my-react-app -- --template react-ts',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Tailwind CSS',
    command: 'npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
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
  {
    name: 'Zustand (Manejo de estado)',
    command: 'npm install zustand',
    link: 'https://zustand-demo.pmnd.rs/',
  },
  {
    name: 'React i18next (Internacionalización)',
    command: 'npm install react-i18next i18next',
    link: 'https://react.i18next.com/',
  },
  {
    name: 'Sass (Preprocesador CSS)',
    command: 'npm install sass',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Styled Components',
    command: 'npm install styled-components',
    link: 'https://styled-components.com/',
  },
  {
    name: 'Jest (Testing)',
    command: 'npm install --save-dev jest @testing-library/react @testing-library/jest-dom',
    link: 'https://jestjs.io/',
  },
  {
    name: 'ESLint (Linter)',
    command: 'npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb',
    link: 'https://eslint.org/',
  },
  {
    name: 'Prettier (Formatteo de código)',
    command: 'npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier',
    link: 'https://prettier.io/',
  },
  {
    name: 'Heroicons (Iconos para Tailwind)',
    command: 'npm install @heroicons/react',
    link: 'https://heroicons.com/',
  },
  {
    name: 'React Helmet (SEO)',
    command: 'npm install react-helmet-async',
    link: 'https://github.com/staylor/react-helmet-async',
  },
  {
    name: 'Redux Toolkit (Manejo de estado avanzado)',
    command: 'npm install @reduxjs/toolkit react-redux',
    link: 'https://redux-toolkit.js.org/',
  },
]
