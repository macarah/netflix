import Image from "next/image";
import Link from 'next/link';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import React from 'react';

// Define your links
const links = [
  { name: 'The Data', href: 'https://github.com/macarah/netflix_comedy' },
  { name: 'About', href: '/about' },
  { name: 'The Best of Netflix', href: '/overview' },
  { name: 'Romance across Borders', href: '/' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Created by Macarah Morgan
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <div className="relative">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Netflix.svg"
          alt="Next.js Logo"
          width={480}
          height={127}
          priority
        />
        <p className="text-center font-mono text-sm mb-4">An exploration of transnational romantic culture</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {links.map((link) => (
        <div
          key={link.name}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <Link href={link.href}>
            {/* Anchor tag removed here */}
            <div>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {link.name}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {/* Description is kept for each link */}
                {link.name === 'The Data' && 'Check out the GitHub repository to access the data and documentation.'}
                {link.name === 'About' && 'Find more information about the project and applications of understanding dynamic transnational media flows.'}
                {link.name === 'The Best of Netflix' && 'Explore the most popular shows and films on Netflix between January and June of 2023.'}
                {link.name === 'Romance across Borders' && 'Here, we analyze the romantic differences and similarities of popular media for select countries.'}
              </p>
            </div>
          </Link>
        </div>
      ))}
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/overview"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>

    </main>
  );
}
