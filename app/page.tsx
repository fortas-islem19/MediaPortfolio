"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
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
    duration: "02:48",
    note: "Landscape campaign film with pacing, color and sound design.",
  },
  {
    title: "Launch Documentary Cut",
    category: "Brand Films",
    duration: "04:12",
    note: "Long-form storytelling for product launches and product-led brands.",
  },
  {
    title: "Social Campaign Edit",
    category: "Motion Graphics",
    duration: "03:05",
    note: "Mixed motion, typography and footage for online conversion.",
  },
];

const reelsVideos = [
  {
    title: "UGC Hook Reel",
    category: "UGC",
    duration: "0:18",
  },
  {
    title: "Product Punch Edit",
    category: "Creative Ads",
    duration: "0:24",
  },
  {
    title: "Motion Teaser",
    category: "Motion Graphics",
    duration: "0:15",
  },
  {
    title: "Trend-Driven Cut",
    category: "Reels",
    duration: "0:21",
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
    <main className="relative overflow-hidden">
      <div className="page-grid pointer-events-none absolute inset-0" />
      <div className="orb orb-1 pointer-events-none absolute -left-24 top-16" />
      <div className="orb orb-2 pointer-events-none absolute right-0 top-[32rem]" />

      <section className="relative container mx-auto pt-6 pb-20 xl:pt-10 xl:pb-28">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] md:items-center xl:items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-transform"
            >
              <FaRegCircle className="text-accent text-xs text-justify" />
              Let's create something together.
            </motion.div>

            <div className="space-y-7 max-w-sm  text-center md:text-lg xl:text-left">
              <motion.h1 variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }} className="h1 max-w-3xl">
                Video editing portfolio for <span className="text-gradient">long-form</span> and <span className="text-gradient">short-form</span> brands.
              </motion.h1>
              <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.14, duration: 0.6, ease: "easeOut" }} className="max-w-2xl text-lg text-white/70">
                I craft landscape campaigns, Reels, motion graphics, UGC edits, and creative ad cuts with a cinematic dark visual identity built for modern brands.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }} className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.span key={category} whileHover={{ y: -4, scale: 1.04 }} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-transform">
                  {category}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.22, duration: 0.6, ease: "easeOut" }} className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 rounded-full px-7 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/20">
                <Link href="#contact">
                  Hire me for a project
                  <FaArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-full border-white/15 bg-white/5 px-7 text-white transition-transform hover:-translate-y-1 hover:bg-white/10">
                <Link href="#work">
                  View portfolio
                  <FaPlay />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.26, duration: 0.6, ease: "easeOut" }} className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <motion.div key={item.title} whileHover={{ y: -8, scale: 1.02 }} className="glass-panel p-5 transition-transform">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/65">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} className="relative">
            <motion.div whileHover={{ y: -10, scale: 1.01 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className="glass-panel relative overflow-hidden p-6 xl:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/45">Now editing</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Landscape x Vertical systems</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                  Available for hire
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-fuchsia-500/20 p-5 min-h-[18rem] transition-transform">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_38%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>Long form</span>
                      <span>16:9</span>
                    </div>
                    <div>
                      <p className="text-4xl font-semibold text-white">Landscapes</p>
                      <p className="mt-3 max-w-xs text-sm text-white/65">
                        Brand stories, case studies, cinematic ads, and documentary-style edits.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <FaPlay />
                      Selected works below
                    </div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-orange-500/20 p-5 min-h-[18rem] transition-transform">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>Short form</span>
                      <span>9:16</span>
                    </div>
                    <div>
                      <p className="text-4xl font-semibold text-white">Reels</p>
                      <p className="mt-3 max-w-xs text-sm text-white/65">
                        UGC hooks, product teasers, trend edits, and high-retention social content.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/75">
                      <FaInstagram />
                      <FaYoutube />
                      <FaTiktok />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }} className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-4">
                <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
                  <div className="space-y-3">
                    <p className="section-kicker">Introduction</p>
                    <h3 className="text-2xl font-semibold text-white">Animated portrait with hover movement.</h3>
                    <p className="text-sm text-white/65">
                      I have more than 6 years of experience in video editing, so the intro now shows the person behind the portfolio.
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-[520px]">
                    <Photo />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {longFormVideos.map((video, index) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="group glass-panel overflow-hidden p-4 transition-transform">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-slate-950 to-cyan-500/20">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_40%,rgba(255,255,255,0.03)_100%)]" />
                <div className="absolute inset-0 flex items-end justify-between p-5 text-sm text-white/75">
                  <span>{video.category}</span>
                  <span>{video.duration}</span>
                </div>
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70">
                  0{index + 1}
                </div>
              </div>
              <div className="px-2 pb-2 pt-5">
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

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reelsVideos.map((video, index) => (
            <motion.article key={video.title} whileHover={{ y: -8, scale: 1.01 }} className="glass-panel p-4 transition-transform">
              <div className="relative mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-slate-950 to-emerald-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%)]" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between text-xs text-white/75">
                    <span>Reel {index + 1}</span>
                    <span>{video.duration}</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{video.title}</p>
                    <p className="mt-1 text-sm text-white/65">{video.category}</p>
                  </div>
                </div>
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

      <section id="contact" className="relative container mx-auto scroll-mt-28 py-8 pb-20 xl:py-14">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <p className="section-kicker">Hire / submit</p>
            <h2 className="h2 mt-4">Tell me about your next video.</h2>
            <p className="mt-6 text-white/70">
              Use this form to hire me for a campaign, recurring social content, an edit sprint, or a creative collaboration.
            </p>
          </div>

          <motion.form
            whileHover={{ y: -6, scale: 1.005 }}
            className="glass-panel flex flex-col gap-5 p-6 transition-transform sm:p-8"
            action="https://formspree.io/f/mqakvneg"
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input type="text" placeholder="First name" name="firstName" />
              <Input type="text" placeholder="Last name" name="lastName" />
              <Input type="email" placeholder="Email address" name="email" />
              <Input type="text" placeholder="WhatsApp / Phone" name="phone" />
            </div>

            <Select name="projectType">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="long-form">Long-form landscape video</SelectItem>
                  <SelectItem value="reels">Reels / short-form edits</SelectItem>
                  <SelectItem value="motion">Motion graphics</SelectItem>
                  <SelectItem value="ugc">UGC / creative ads</SelectItem>
                  <SelectItem value="retainer">Monthly content retainer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea name="message" className="min-h-44" placeholder="Describe the project, platform, deadline, and style reference." />

            <Button type="submit" size="lg" className="self-start gap-2 rounded-full px-7">
              Send inquiry
              <FaArrowRight />
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Home;