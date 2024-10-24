import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PictureFrame from '@/components/PictureFrame'

const australiaMenuLinks = [
  { label: 'tasmania', href: 'tasmania' },
  { label: 'melbourne', href: 'melbourne' },
  { label: 'sydney', href: 'sydney' },
  { label: 'brisbane', href: 'brisbane' },
]

export default function AustraliaPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold pb-4">Australia</h1>
        <div className="flex flex-wrap max-w-[200px] justify-center items-center gap-1">
          {australiaMenuLinks.map((link) => (
            <a
              className="border-b-2 border-gray-500"
              href={`#${link.href}`}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div
        id="tasmania"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h2 className="text-2xl font-bold pb-4">Tasmania</h2>
        <div className="font-mono">
          <p>day 1: monday to wednesday</p>
          <p>
            Arriving in Hobart, Australia by plane from Sydney after a crazy
            long flight from CDMX (Mexico City) to LAX and then 16 hours across
            the pacific.
          </p>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <PictureFrame
              src="/images/australia/tasmania/flight-1.png"
              alt="flight-tasmania"
            />
          </div>
        </div>
      </div>
    </>
  )
}
