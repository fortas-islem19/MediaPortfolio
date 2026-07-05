"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";

import { FiDownload } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaArrowRight,
  FaInstagram,
  FaPlay,
  FaRegCircle,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiVideo, FiZap } from "react-icons/fi";

const categories = ["Motion Graphics", "UGC", "Creative Ads", "Brand Films", "Reels"];

const longFormVideos = [
  {
    title: "Cinematic Brand Story",
    category: "Creative Ads",
    youtubeId: "4scdEethU7g", // Replace with your YouTube video ID
    note: "Landscape campaign film with pacing, color and sound design.",
  },
  {
    title: "Launch Documentary Cut",
    category: "Brand Films",
    youtubeId: "nbP1eWHEVWo", // Replace with your YouTube video ID
    note: "Long-form storytelling for product launches and product-led brands.",
  },
  {
    title: "Social Campaign Edit",
    category: "Motion Graphics",
    youtubeId: "lpg0_wyCltQ", // Replace with your YouTube video ID
    note: "Mixed motion, typography and footage for online conversion.",
  },
];

const reelsVideos = [
  {
    title: "UGC Hook Reel",
    category: "UGC",
    youtubeId: "yNzMbJr9GZw", // Replace with your YouTube Shorts ID
  },
  {
    title: "Product Punch Edit",
    category: "Creative Ads",
    youtubeId: "56_ofShuJUs", // Replace with your YouTube Shorts ID
  },
  {
    title: "Motion Teaser",
    category: "Motion Graphics",
    youtubeId: "WG4WgXShN88", // Replace with your YouTube Shorts ID
  },
  {
    title: "Trend-Driven Cut",
    category: "Reels",
    youtubeId: "UNEXXxPKYow", // Replace with your YouTube Shorts ID
  },
];

const experience = [
  {
    role: "Video Editor",
    company: "Esaboura",
    period: "2022 - Present",
  },
  {
    role: "Motion / Graphic Designer",
    company: "Esaboura",
    period: "2022 - Present",
  },
  {
    role: "Freelance Video Producer",
    company: "PharmaSetif",
    period: "2022 - 2023",
  },
  {
    role: "Freelance UI / UX Designer",
    company: "MKTech + StartUP Click Med",
    period: "2023 - 2024",
  },
];

const highlights = [
  {
    icon: <FiVideo />,
    title: "Long-form edits",
    description: "Narrative, branded and documentary cuts built for landscape delivery.",
  },
  {
    icon: <FiZap />,
    title: "Short-form reels",
    description: "Fast, trend-aware vertical edits optimized for retention and hooks.",
  },
  {
    icon: <FiMail />,
    title: "Book a project",
    description: "Direct hire form for campaigns, launches, recurring content and retainers.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/> <span className="text-accent">Fortas Islem</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80"> 
              I excel at crafting elegant digital experience and I am 
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="Fortas Nour El Islem Yaakoub CV.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <section id="about" className="relative container mx-auto scroll-mt-28 py-8 xl:py-14">
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel p-8">
            <p className="section-kicker">About me</p>
            <h2 className="h2 mt-4">I build content that feels premium, native, and fast.</h2>
            <p className="mt-6 text-white/70">
              I’m Jacoub, a video editor and creative designer with more than 6 years of experience working across motion graphics, UGC, ads, reels, and brand storytelling. My work focuses on strong pacing, sharp hooks, clean typography, and a dark cinematic look.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 px-4 py-2">Cinematic editing</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Motion graphics</span>
              <span className="rounded-full border border-white/10 px-4 py-2">UGC strategy</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experience.map((item) => (
              <div key={item.role} className="glass-panel p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-accent">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-white/65">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative container mx-auto scroll-mt-28 py-8 xl:py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="h2 mt-4">Long-form landscape videos</h2>
          </div>
          <p className="max-w-xl text-right text-white/60">
            Built for brand films, explainers, and campaign edits with visual hierarchy and sound-first pacing.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-5">
          {longFormVideos.map((video) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="group glass-panel overflow-hidden p-4 transition-transform w-full lg:w-[calc(33.333%-14px)]">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">{video.category}</p>
                <h3 className="text-2xl font-semibold text-white">{video.title}</h3>
                <p className="mt-2 text-white/65">{video.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="short-form" className="relative container mx-auto scroll-mt-28 py-8 xl:py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker">Reels section</p>
            <h2 className="h2 mt-4">Short-form videos by category</h2>
          </div>
          <p className="max-w-xl text-right text-white/60">
            A vertical-first system for UGC, ads, motion graphics, and fast-turn social output.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-5 justify-center">
          {reelsVideos.map((video) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="glass-panel p-4 transition-transform w-full sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]">
              <div className="relative mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">{video.category}</p>
                <p className="text-lg font-semibold text-white">{video.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative container mx-auto scroll-mt-28 py-8 xl:py-14">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <p className="section-kicker">Experience</p>
            <h2 className="h2 mt-4">Work history and creative background</h2>
            <p className="mt-6 text-white/70">
              My experience spans video editing, motion design, social-first content, and creative direction for businesses that need polished and effective media.
            </p>
          </div>
          <div className="grid gap-4">
            {experience.map((item) => (
              <motion.div key={`${item.company}-${item.role}`} whileHover={{ x: 6, scale: 1.01 }} className="glass-panel flex items-center justify-between gap-6 p-6 transition-transform">
                <div>
                  <p className="text-sm text-accent">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                </div>
                <p className="text-white/60">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative container mx-auto scroll-mt-28 py-8 xl:py-14">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="xl:w-1/2">
            <p className="section-kicker">Get in touch</p>
            <h2 className="h2 mt-4">Let&apos;s work together</h2>
            <p className="mt-6 text-white/70 max-w-[500px]">
              Ready to bring your project to life? Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="xl:w-1/2">
            <form
              className="flex flex-col gap-6 p-8 glass-panel"
              action="https://formspree.io/f/mqakvneg"
              method="POST"
            >
              <Input type="text" placeholder="Full Name" name="FullName" />
              <Input type="email" placeholder="Email Address" name="Email" />
              <Input type="text" placeholder="Phone Number (WhatsApp)" name="Phone_WhatsApp" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="media-buying">Media Buying</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="photo-video-graphy">Photo/Video-Graphy</SelectItem>
                    <SelectItem value="video-editing">Video Editing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button size="lg" className="max-w-40" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home;