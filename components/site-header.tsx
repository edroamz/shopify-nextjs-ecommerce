import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 py-8 xl:py-10 lg:max-w-7xl lg:px-8">
        <Link className="mr-6 flex items-center space-x-2" href="/">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span className="font-bold sm:inline-block">ACME Store</span>
        </Link>
        <div className="flex items-center justify-center gap-6">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            width="20px"
            height="20px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              fill="#000000"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
