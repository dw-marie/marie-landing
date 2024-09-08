import EarlyAccess from "@/components/EarlyAccess";
import Link from "next/link";

export default async function Page() {
    return (
      <div className="w-screen h-screen">
        <nav className="flex items-center justify-between pt-6 md:pl-8 xl:pl-16 xl:mt-4">
          <Link href={'/'}>
            <img src="/2-logo-Marie.svg" className="w-40 lg:w-56 2xl:w-96"></img>
          </Link>
        </nav>
        <div className="px-6 mt-8 flex items-center justify-center">
          <EarlyAccess />
        </div>
        
      </div>
    )
    
}