"use client";

import Link
 from "next/link";

 const links = [
 {
  name : 'Showreel',
  path : "#hero",
 },
 {
  name : 'Long form',
  path : "#work",
 },
 {
  name : 'Reels',
  path : "#short-form",
 }, 
 {
  name : 'About',
  path : "#about",
 },
 {
  name : 'Experience',
  path : "#experience",
 },
 {
  name : 'Hire',
  path : "#contact",
 },
]

const Nav = () => {
  return (
    <nav className="flex gap-8 text-sm uppercase tracking-[0.18em] text-white/70">
      {links.map((link, index)=> {
        return <Link href={link.path} key={index} className="font-medium transition-colors hover:text-white">{link.name}</Link>
      })}
    </nav>
  )
}

export default Nav