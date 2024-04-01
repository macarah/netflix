import React, { useState } from 'react';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';
import * as d3 from 'd3';


export default function Overview() {
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Methodology
        </p>
      </div>
      <div className="flex items-center justify-center mb-8 text-sm lg:flex">
        <img src="/netflix_tv.jpeg" alt="Netflix Logo" className="w-full max-w-lg" /> {/* Adjust the width as needed */}
        <p className="text-lg">Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company&apos;s primary business is a subscription-based streaming service offering online streaming from a library of films and television series, including those produced in-house.</p>
      </div>

      <div className="mb-4 mt-10 flex flex-col items-center">
        <div className="flex">
            <div className="flex-2 mr-8"> {/* Adjust the flex-2 class to allocate more space to the left grid */}
            <h2 className="font-semibold text-lg mb-8">From the 10 Countries with Highest Number of Netflix Subscribers:</h2>
            <img src="/subs.png" alt="Netflix Logo" className="w-full max-w-lg" /> {/* Adjust the width as needed */}
            <p className="text-center mt-5">Data from FlixPatrol.</p>
            </div>
            <div className="flex-1">
            <h2 className="font-semibold text-lg mb-8">4 countries located in different regions of the world were selected:</h2>
            <ul className="text-lg ml-8 list-disc">
                <li className="font-mono">United States</li>
                <li className="font-mono">Brazil</li>
                <li className="font-mono">Germany</li>
                <li className="font-mono">Japan</li>
            </ul>
            </div>
        </div>
        </div>



      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/overview"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>
     </main>
  );
}
