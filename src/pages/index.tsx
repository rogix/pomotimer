import Link from 'next/link'

import type { NextPage } from 'next'
import { CountdownCircle } from '../components/CountdownCircle'

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <CountdownCircle
        size={300}
        strokeWidth={25}
        duration={25}
        color="red"
        onComplete={() => {}}
      />
    </>
  )
}

export default Home
