import Link from "next/link"

export default function Component() {
  return (
    <>
      <footer className="bg-custom-dark py-12 sm:py-16 md:py-24 xl:py-32">
        <div className="container grid gap-8 px-4 text-center items-center justify-center space-y-4 md:grid-cols-3 md:px-6 lg:gap-10">
          <div className="mx-auto flex w-full items-center justify-center space-x-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Roots And Styles</h1>
          </div>
          <div className="space-y-2 md:col-span-2 md:text-left md:space-y-4">
            <div className="space-y-1 text-gray-400 dark:text-gray-500">
              <p>Book an appointment</p>
              <p>123-456-7890</p>
              <p>info@example.com</p>
            </div>
            <div className="flex justify-center space-x-4 md:justify-start">
              <Link
                className="rounded-full inline-flex h-8 items-center justify-center bg-gray-950 hover:bg-gray-850 text-gray-50 hover:text-gray-950 dark:bg-gray-50 dark:hover:bg-gray-100 dark:text-gray-950 dark:hover:text-gray-50"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link
                className="rounded-full inline-flex h-8 items-center justify-center bg-gray-950 hover:bg-gray-850 text-gray-50 hover:text-gray-950 dark:bg-gray-50 dark:hover:bg-gray-100 dark:text-gray-950 dark:hover:text-gray-50"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link
                className="rounded-full inline-flex h-8 items-center justify-center bg-gray-950 hover:bg-gray-850 text-gray-50 hover:text-gray-950 dark:bg-gray-50 dark:hover:bg-gray-100 dark:text-gray-950 dark:hover:text-gray-50"
                href="#"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-2 md:col-span-3 md:text-center">
            <p className="text-gray-400 dark:text-gray-500">© 2024 Barber Shop. All rights reserved.</p>
            <nav className="flex justify-center space-x-4">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

