export const metadata: Metadata = {
  title: 'MENU - SEANPATRICKOREILLY.COM',
  description: 'Sean Patrick OReilly',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
