import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex gap-4 justify-between items-center text-5xl">
      <Link href="/">Sean Patrick OReilly</Link>
      <Link href="/menu">Menu</Link>
    </nav>
  )
}
