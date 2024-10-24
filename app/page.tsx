import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">hello world</main>
      <footer className="flex gap-1 items-center justify-center">
        <span>©</span>
        <span>My Signature</span>
      </footer>
    </div>
  )
}
