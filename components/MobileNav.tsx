"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: 'showreel',
        path: '/#hero',
    },
    {
        name: 'long form',
        path: '/#work',
    },
    {
        name: 'reels',
        path: '/#short-form',
    },
    {
        name: 'about',
        path: '/#about',
    },
    {
        name: 'experience',
        path: '/#experience',
    },
    {
        name: 'hire',
        path: '/#contact',
    },
]

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent " />
        </SheetTrigger>
        <SheetContent className="flex flex-col border-white/10 bg-[#050816] text-white">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jacoub <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">.</span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                    <Link href={link.path} key={index} className="text-xl capitalize text-white/75 px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-accent hover:text-primary hover:font-medium">
                        {link.name}
                    </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
