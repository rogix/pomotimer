import Link from 'next/link'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Home
