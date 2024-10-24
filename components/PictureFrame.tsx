import Image from 'next/image'

const backgroundImages = [
  '/images/background/kiwihug-y_2GC4EhOP4-unsplash.jpg',
  '/images/background/kiwihug-cqhXfrRHCPo-unsplash.jpg',
  '/images/background/nordwood-themes-KcsKWw77Ovw-unsplash.jpg',
]

export default function PictureFrame({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className="relative aspect-square h-full w-full">
      <Image
        fill
        src={src}
        alt={alt}
        className="p-10"
      />

      <Image
        fill
        className="absolute inset-0 -z-10"
        alt="background"
        src={backgroundImages[2]}
      />
    </div>
  )
}
