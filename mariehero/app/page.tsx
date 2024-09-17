'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'

export default function Example() {
    const router = useRouter();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/2-logo-Marie.svg"
                className="h-20 md:h-32 xl:h-40 w-auto"
              />
            </a>
          </div>
        </nav>
      </header>
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-[#105DFB]">We’re raising</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="https://doc.clickup.com/9012243709/d/h/8cjqv7x-5192/503b9931b61f3d8" className="flex items-center gap-x-1 text-[#20201D]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Our investor letter
                  <ChevronRightIcon aria-hidden="true" className="-mr-2 h-5 w-5 text-gray-400" />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Explore every home in Europe, designed for expats
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We simplify property buying for expats with the only platform offering access to all European markets, removing the need for region-specific sites.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={() => router.push('/earlyaccess')}
                className="rounded-md bg-[#105DFB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#105DFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#105DFB]"
              >
                Get early access
              </button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <object width={316} height={684} data='/map.svg' className='w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}