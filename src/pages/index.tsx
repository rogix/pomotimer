import type { NextPage } from 'next'
import { CountdownCircle } from '../components/CountdownCircle'
import { Sidenav } from '@/components/SideNav'

const Home: NextPage = () => {
  return (
    <main className="bg-gray-900 h-screen text-white">
      <Sidenav />
      <section className="flex justify-center  py-32">
        <CountdownCircle
          size={400}
          strokeWidth={35}
          duration={25}
          color="#560B90"
          onComplete={() => {}}
        />
      </section>
    </main>
  )
}

export default Home
