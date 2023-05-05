export default function Footer() {
  return (
    <footer className="m-4 flex flex-col items-center">
      <p className="flex items-center text-light-on_sur_var dark:text-dark-on_sur_var">
        &copy; 2023 Blüish &bull; Page Made by{' '}
        <a
          href="https://github.com/classiuz"
          className="mx-1 text-light-sec hover:text-light-pri dark:text-dark-sec dark:hover:text-dark-pri"
        >
          ClaSSius
        </a>{' '}
      </p>
      <p className="text-xs text-light-on_sur_var/90 dark:text-dark-on_sur_var/70">
        Colors and Icons provides from <a href="https://m3.material.io/">Material Design</a>, credits to them.
      </p>
    </footer>
  )
}
