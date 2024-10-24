import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">My Signature</Link>
      <ul>
        <li>
          {/* instagram icon */}
          <Link href="/">
            instagram
            {/* <Instagram /> */}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
