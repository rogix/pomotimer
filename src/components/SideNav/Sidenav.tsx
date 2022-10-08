import Link from 'next/link'
import { useRouter } from 'next/router'

function Sidenav() {
  const router = useRouter()

  return (
    <>
      <nav className="flex flex-col items-center absolute bg-[#0b141d] h-screen w-52">
        <header className="py-10">Pomotimer</header>
        <ul className="w-full flex flex-col items-end">
          <li className="flex justify-end flex-col items-end group">
            <span className="h-10 w-10 block bg-gray-900" />
            <div
              className={
                router.asPath === '/'
                  ? 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 before:rounded-br-full'
                  : 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 group-hover:after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 group-hover:before:rounded-br-full'
              }
            >
              <div
                className={
                  router.asPath === '/'
                    ? 'w-44 h-24  rounded-l-full bg-gray-900 flex items-center'
                    : 'w-44 h-24  rounded-l-full bg-[#0b141d] hover:bg-gray-900 flex items-center group-hover:bg-gray-900'
                }
              >
                <Link href="/">
                  <a className="text-2xl pl-5">Timer</a>
                </Link>
              </div>
            </div>
            <span className="h-10 w-10 block bg-gray-900 " />
          </li>

          <li className="flex justify-end flex-col items-end group">
            <span className="h-10 w-10 block bg-gray-900" />
            <div
              className={
                router.asPath === '/stats'
                  ? 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 before:rounded-br-full'
                  : 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 group-hover:after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 group-hover:before:rounded-br-full'
              }
            >
              <div
                className={
                  router.asPath === '/stats'
                    ? 'w-44 h-24  rounded-l-full bg-gray-900 flex items-center'
                    : 'w-44 h-24  rounded-l-full bg-[#0b141d] hover:bg-gray-900 flex items-center group-hover:bg-gray-900'
                }
              >
                <Link href="/stats">
                  <a className="text-2xl pl-5">Stats</a>
                </Link>
              </div>
            </div>
            <span className="h-10 w-10 block bg-gray-900 " />
          </li>

          <li className="flex justify-end flex-col items-end group">
            <span className="h-10 w-10 block bg-gray-900" />
            <div
              className={
                router.asPath === '/settings'
                  ? 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 before:rounded-br-full'
                  : 'relative after:border-r-[#0b141d] after:border-r-[40px] after:absolute after:right-0 after:h-10 group-hover:after:rounded-tr-full before:border-r-[#0b141d] before:border-r-[40px] before:absolute before:right-0 before:bottom-24 before:h-10 group-hover:before:rounded-br-full'
              }
            >
              <div
                className={
                  router.asPath === '/settings'
                    ? 'w-44 h-24  rounded-l-full bg-gray-900 flex items-center'
                    : 'w-44 h-24  rounded-l-full bg-[#0b141d] hover:bg-gray-900 flex items-center group-hover:bg-gray-900'
                }
              >
                <Link href="/settings">
                  <a className="text-2xl pl-5">Settings</a>
                </Link>
              </div>
            </div>
            <span className="h-10 w-10 block bg-gray-900 " />
          </li>
        </ul>
      </nav>
    </>
  )
}

export { Sidenav }
