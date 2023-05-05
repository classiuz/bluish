/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        lvl1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        lvl2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        lvl3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        lvl4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        lvl5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },
      colors: {
        light: {
          bg: '#fcfcff',
          on_bg: '#191c1e',
          sur: '#fcfcff',
          on_sur: '#191c1e',
          sur_var: '#dde3ea',
          on_sur_var: '#41474d',
          outline: '#71787e',
          pri: {
            DEFAULT: '#006591',
            on_pri: '#ffffff',
            cont: '#c9e6ff',
            on_cont: '#001e2f',
          },
          sec: {
            DEFAULT: '#b4136d',
            on_sec: '#ffffff',
            cont: '#ffd9e4',
            on_cont: '#3e0022',
          },
          err: {
            DEFAULT: '#ba1a1a',
            on_err: '#ffffff',
            cont: '#ffdad6',
            on_cont: '#410002',
          },
        },
        dark: {
          bg: '#191c1e',
          on_bg: '#e2e2e5',
          sur: '#191c1e',
          on_sur: '#e2e2e5',
          sur_var: '#41474d',
          on_sur_var: '#c1c7ce',
          outline: '#8b9198',
          pri: {
            DEFAULT: '#89ceff',
            on_pri: '#00344d',
            cont: '#004c6e',
            on_cont: '#c9e6ff',
          },
          sec: {
            DEFAULT: '#ffb0cd',
            on_sec: '#640039',
            cont: '#8c0053',
            on_cont: '#ffd9e4',
          },
          err: {
            DEFAULT: '#ffb4ab',
            on_err: '#690005',
            cont: '#93000a',
            on_cont: '#ffdad6',
          },
        },
      },
    },
  },
  plugins: [],
}
