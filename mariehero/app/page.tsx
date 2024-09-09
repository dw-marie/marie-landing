"use client"

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
      <div className="w-screen lg:h-screen overflow-x-hidden lg:overflow-y-hidden relative">
        <header>
          <nav className="flex items-center justify-between pt-6 md:pl-8 xl:pl-16 xl:mt-4">
            <Link href={'/'}>
              <img src="/2-logo-Marie.svg" className="w-40 lg:w-56 2xl:w-96"></img>
            </Link>
          </nav>
        </header>
        <div className="px-6 pt-8 md:pt-16 md:px-12 lg:px-16 lg:pt-20 xl:px-24 md:flex md:flex-row lg:justify-evenly lg:items-start">
          <div className="lg:w-3/5 ">
            <div className="rounded-full py-1 px-3 border h-8 2xl:h-16 w-[300px] 2xl:w-[450px] flex items-center divide-x-2 text-sm 2xl:text-2xl">
              <p className="pr-4 font-semibold text-[#105DFB]">We're raising</p>
              <Link href={'https://doc.clickup.com/9012243709/d/h/8cjqv7x-5192/503b9931b61f3d8'} className="inline-flex items-center pl-4 gap-x-2">
                <p className="text-[#20201D]">Our investor letter</p>
                <ChevronRight size={20}/>
              </Link>
            </div>
            <h1 className="font-bold text-4xl xl:text-6xl 2xl:text-8xl xl:w-3/4 leading-10  mt-4 2xl:mt-12 text-[#20201D]">Explore every home in Europe, designed for expats</h1>
            <p className="mt-6 2xl:mt-12 text-xl xl:text-2xl 2xl:text-5xl leading-8 text-gray-500">We simplify property buying for expats with the only platform offering access to all European markets, removing the need for region-specific sites.</p>
            <div className="mt-10 2xl:mt-20 flex items-center gap-x-6 font-semibold 2xl:text-3xl">
              <button onClick={() => router.push('/earlyaccess')} className="rounded-md bg-[#105DFB] text-white py-3 px-4 2xl:py-6 2xl:px-8">Get early access</button>
            </div>
          </div>
          <div className="mt-[60px] lg:mt-0 lg:w-2/5 lg:flex lg:justify-around md:relative md:-top-20 lg:-top-20 xl:-top-32">
            <div className="lg:w-3/4 xl:w-3/5 2xl:w-4/6">
              <object width={300} height={600} data='/map.svg' className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
  );
}
