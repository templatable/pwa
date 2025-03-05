import Link from 'next/link'
import { FaGithub, FaHeart } from 'react-icons/fa6'
import { HiTemplate } from 'react-icons/hi'
import InstallButton from '@/components/Install'

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen h-full flex items-center justify-center">
      <Link
        href="https://github.com/templatable/pwa"
        className="text-foreground absolute top-8 right-8 p-4 border-2 rounded-full text-3xl border-border transition-all duration-150 hover:border-b-foreground"
      >
        <FaGithub />
      </Link>
      <InstallButton />
      <div className="w-full flex flex-col max-w-xl mx-auto">
        <div className="p-8 pb-6 flex flex-col border-b-2 border-border">
          <h1 className="font-semibold text-4xl">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-[#1C3E35] after:to-[#99F2D1]">
              PWA
            </span>{' '}
            Template
          </h1>
          <p className="font-medium text-md mt-2 opacity-70">
            Get Started by editing{' '}
            <Link
              href=""
              className="mx-1 font-mono p-0.5 px-1 bg-border/10 rounded-md border-border border"
            >
              app/page.tsx
            </Link>{' '}
          </p>
        </div>

        <div className="px-12 py-6 flex flex-col">
          <h2 className="font-semibold text-2xl">Tech Stack</h2>
          <ul className="list-disc *:font-medium *:opacity-80 list-inside mt-4 space-y-2 px-4">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>React Icons</li>
            <li>Supabase</li>
            <li>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#1C3E35] after:to-[#99F2D1]">
                PWA
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-20">
        <Link
          href="https://github.com/templatable?tab=repositories"
          className="font-semibold opacity-80 py-2 border-b border-b-transparent hover:border-b-foreground transition-all duration-200"
        >
          <HiTemplate className="inline text-lg mr-1" /> Other Templates
        </Link>
      </div>
      <div className="absolute bottom-6 flex left-0 w-screen items-center justify-center">
        <p className="text-xs opacity-60">
          Made with{' '}
          <FaHeart className="text-[#FF6165] text-sm mx-0.5 mb-0.5 inline" /> by{' '}
          <a
            href="marban.is-a.dev"
            className="text-foreground font-medium underline decoration-1 decoration-[#FF6165]"
          >
            marban
          </a>
        </p>
      </div>
    </div>
  )
}
