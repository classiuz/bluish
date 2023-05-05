'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode, MdRefresh } from 'react-icons/md'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return mounted ? (
    <button
      onClick={handleTheme}
      className="text-xl text-light-on_sur_var hover:text-light-pri dark:text-dark-on_sur_var dark:hover:text-dark-pri"
    >
      {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  ) : (
    <button className="animate-spin text-xl text-light-on_sur_var dark:text-dark-on_sur_var">
      <MdRefresh />
    </button>
  )
}
