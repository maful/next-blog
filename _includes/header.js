import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between mb-4 pt-8 pb-2 relative z-20">
          <div className="py-1 pr-4">
            <h1 className="text-xl leading-snug tracking-tight font-semibold md:text-2xl md:font-bold">
              <Link href="/">
                <a aria-label="Maful Prayoga">Maful Prayoga</a>
              </Link>
            </h1>
          </div>
          <div className="flex flex-row items-center">
            <a
              href="mailto:mafulprayoga@gmail.com"
              aria-label="Work with me"
              className="button-primary flex flex-row items-center shadow ml-4"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current mr-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 21c-1.654 0-3-1.346-3-3v-2H9v2c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3h2V9H6C4.346 9 3 7.654 3 6s1.346-3 3-3 3 1.346 3 3v2h6V6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3h-2v6h2c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-2-5v2c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2zM6 16c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2v-2zm3-1h6V9H9zm7-7h2c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2zM6 4c-1.103 0-2 .897-2 2s.897 2 2 2h2V6c0-1.103-.897-2-2-2z" />
                <path d="M21.5 24h-19A2.503 2.503 0 010 21.5v-19C0 1.122 1.122 0 2.5 0h19C22.878 0 24 1.122 24 2.5v19c0 1.378-1.122 2.5-2.5 2.5zM2.5 1C1.673 1 1 1.673 1 2.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z" />
              </svg>
              <span>Work With Me</span>
            </a>
          </div>
        </div>
        <div className="sub-header flex flex-row flex-wrap items-end justify-between text-base uppercase font-medium text-black">
          <div className="overflow-hidden flex-1">
            <nav className="flex flex-row flex-1 whitespace-no-wrap text-sm">
              <Link href="/">
                <a className="active block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-3 py-3 tracking-wider hover:opacity-100 border-gray-400 opacity-100 hover:bg-dark-translucent">
                  Home
                </a>
              </Link>
              <Link href="#">
                <a className="block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-3 py-3 tracking-wider hover:opacity-100 border-gray-400 opacity-100 hover:bg-dark-translucent">
                  Projects
                </a>
              </Link>
              <Link href="#">
                <a className="block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-3 py-3 tracking-wider hover:opacity-100 border-gray-400 opacity-100 hover:bg-dark-translucent">
                  About
                </a>
              </Link>
            </nav>
          </div>
          <div className="social-media flex flex-row items-center">
            <a
              href="/"
              target="_blank"
              rel="noopener"
              aria-label="Find me on twitter"
              className="block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-1 md:px-2 py-3 opacity-50 hover:opacity-100 hover:bg-dark-translucent"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener"
              aria-label="Find me on github"
              className="block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-1 md:px-2 py-3 opacity-50 hover:opacity-100 hover:bg-dark-translucent"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
              </svg>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener"
              aria-label="Find me on feed"
              className="block transition-colors duration-100 rounded-tl-lg rounded-tr-lg px-1 md:px-2 py-3 opacity-50 hover:opacity-100 hover:bg-dark-translucent"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
