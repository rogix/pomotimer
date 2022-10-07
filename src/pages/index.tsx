import Link from 'next/link'

import type { NextPage } from 'next'
import { CountdownCircle } from '../components/CountdownCircle'

const Home: NextPage = () => {
  return (
    <main className="bg-gray-900 h-screen text-white">
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <section className="flex justify-center  py-32">
        <CountdownCircle
          size={400}
          strokeWidth={35}
          duration={0.1}
          color="#560B90"
          onComplete={() => {}}
        />
      </section>
    </main>
  )
}

export default Home
