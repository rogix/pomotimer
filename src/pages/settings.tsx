import { Sidenav } from '@/components/SideNav'

export default function Settings() {
  return (
    <main className="bg-gray-900 h-screen text-white">
      <Sidenav />
      <section className="flex justify-center  py-32">
        <h2 className="text-9xl">Settings</h2>
      </section>
    </main>
  )
}
