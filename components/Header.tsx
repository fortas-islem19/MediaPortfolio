import Link from "next/link";
import { Button } from "./ui/button";
// components 
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 py-5 text-white backdrop-blur-xl xl:py-6">
        <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Jacoub  
                <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">.</span>
            </h1>
        </Link>
        {/* Desktop nav and hire me button  */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 text-black hover:opacity-95">Hire me</Button>
            </Link>
        </div>
        {/* Mobile nav and hire me button  */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
          
        </div>
        
    </header>
  )
}

export default Header