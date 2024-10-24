import Image from 'next/image'
import Link from 'next/link'

const menuLinks = [
  { label: 'latest', href: '/' },
  { label: 'journal', href: '/' },
  { label: 'stuff', href: '/' },
  { label: 'photography', href: '/' },
]

export default function MenuPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[800px]">
      <h1 className="text-4xl font-bold pb-4">My menu</h1>
      <div className="grid grid-cols-2 gap-1">
        {menuLinks.map((link) => (
          <Link
            className="border-b-2 border-gray-500"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
