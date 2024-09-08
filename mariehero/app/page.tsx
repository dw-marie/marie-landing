import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen lg:h-screen overflow-x-hidden">
      <header>
        <nav className="flex items-center justify-between pt-6 lg:pl-16 lg:py-0">
          <Link href={'/'}>
            <img src="/2-logo-Marie.svg" className="w-40 lg:w-56"></img>
          </Link>
        </nav>
      </header>
      <div className="px-6 pt-8 lg:pt-20 lg:px-24 lg:flex lg:flex-row lg:justify-evenly lg:items-start">
        <div className="lg:w-3/5">
          <div className="rounded-full py-1 px-3 border h-8 w-[300px] flex items-center divide-x-2 text-sm">
            <p className="pr-4 font-semibold text-[#105DFB]">We're raising</p>
            <div className="inline-flex items-center pl-4 gap-x-2">
              <p className="text-[#20201D]">Our investor letter</p>
              <ChevronRight size={20}/>
            </div>
          </div>
          <h1 className="font-bold text-4xl lg:text-6xl lg:w-3/4 leading-10 mt-4 text-[#20201D]">Explore every home in Europe, designed for expats</h1>
          <p className="mt-6 text-xl lg:text-2xl leading-8 text-gray-500">We simplify property buying for expats with the only platform offering access to all European markets, removing the need for region-specific sites.</p>
          <div className="mt-10 flex items-center gap-x-6 font-semibold">
            <Link href={'/'} className="rounded-md bg-[#105DFB] text-white py-3 px-4 ">Get early access</Link>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-0 lg:2/5 lg:flex lg:justify-around lg:relative lg:-top-32">
          <div className="lg:w-3/4">
            <object width={300} height={600} data='/map.svg' className="w-full h-auto"/>
          </div>
          
        </div>

      </div>

    </div>
  );
}
