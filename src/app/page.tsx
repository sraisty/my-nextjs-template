import Link from 'next/link'

const Home = () => {
  return (
    <div className=" justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col items-center sm:items-start space-x-8">
        <Link href="/users">
          <h1 className="text-2xl \">User Directory</h1>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 ">
        <p></p>
      </footer>
    </div>
  )
}

export default Home
