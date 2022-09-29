import Link from 'next/link'

import type { NextPage } from 'next'
import { CountdownCircle } from '../components/CountdownCircle'

const Home: NextPage = () => {
  return (
    <main className="bg-gray-900 h-screen text-white">
      {/* <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav> */}
      <section className="flex justify-center  py-32">
        <CountdownCircle
          size={300}
          strokeWidth={25}
          duration={25}
          color="#8605EC"
          onComplete={() => {}}
        />
      </section>
    </main>
  )
}

export default Home
