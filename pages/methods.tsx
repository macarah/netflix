import '/app/globals.css';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronsDown } from 'lucide-react';
import Link from 'next/link';

export default function Overview() {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleNext = () => {
    setActiveDiv(activeDiv < 5 ? activeDiv + 1 : 0);
  };

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

      {/* Div 1 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 0 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex items-center justify-center mb-8 text-sm lg:flex">
            <img src="/netflix_tv.jpeg" alt="Netflix Logo" className="w-full max-w-lg" />
          </div>
          <div className="flex items-center justify-center mb-8 text-sm lg:flex">
            <p className="text-lg">Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company&apos;s primary business is a subscription-based streaming service offering online streaming from a library of films and television series, including those produced in-house.</p>
          </div>
        </div>
      </div>

      {/* Div 2 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="mb-4 mt-10 flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-8">From the 10 Countries with Highest Number of Netflix Subscribers:</h2>
          <img src="/subs.png" alt="Netflix Logo" className="w-full max-w-lg" />
          <p className="text-center mt-5">Data from FlixPatrol.</p>
        </div>
      </div>

      {/* Div 3 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="mb-4 mt-10 flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-8">The following countries were selected for this analysis:</h2>
          <ul className="list-disc">
            <li>United States of America</li>
            <li>Germany</li>
            <li>Japan</li>
            <li>Mexico</li>
          </ul>
          <p className="text-center mt-5">These countries were selected because their linguistic, cultural, and geographical differences can provide us with diverse insight on audience preference in the respective countries. </p>
        </div>
      </div>

      {/* Div 4 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="mb-4 mt-10 flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-8">From the selected 4 countries, the 20 most popular Netflix shows were determined by ranking TV shows based on their cumulative weeks in the Netflix Top 10 from lists published between June 28, 2021 and June 20, 2023. From the rankings, the top three romance shows for each country was extracted:</h2>
          <img src="/cum_weeks_netflix.png" alt="Netflix Analysis" className="w-full max-w-700" />
          <p className="text-center mt-5">Data from Netflix: <a href="https://www.netflix.com/tudum/top10/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>https://www.netflix.com/tudum/top10/</a></p>
        </div>
      </div>

      {/* Div 5 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 4 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="mb-4 mt-10 flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-8">To analyze unfiltered audience opinions and thoughts about the shows, data was collected from popular social media platforms in each country. Specifically:</h2>
          <ul className="list-disc">
            <li>For the United States, data was scraped from the online discussion platform Reddit.</li>
            <li>For Germany, data was scraped from Facebook groups and accounts specifically targeting users in Germany.</li>
            <li>For Japan, data was scraped from Twitter users who write posts in Japanese.</li>
            <li>For Mexico, data was scraped from Facebook groups and users who write posts and comments in Spanish.</li>
          </ul>
          <p className="text-center mt-5">This approach allows for a comprehensive examination of audience sentiment and discussions related to the shows across different cultural contexts.</p>
        </div>
      </div>

      {/* Div 6 */}
      <div className={`transition-opacity duration-500 ${activeDiv === 5 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="mb-4 mt-10 flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-8">Natural Language Processing will be used to quantify the textual data collected and conduct an informative analysis of what elements of popular Netflix romance shows specific audiences liked and did not like.</h2>
          <ol className="list-decimal space-y-2">
            <li>Utilized BERT Sentiment Analysis to divide the textual data into positively, negatively, and neutrally labeled data for further analysis.</li>
            <li>
              Determined what viewers enjoyed using positively labeled data to conduct:
              <ol className="list-disc ml-8">
                <li>BERT Name Entity Recognition (mainly filtering on “PER” or person).</li>
                <li>Stanza Word Clouds (coloring by part-of-speech tags).</li>
                <li>N-grams (lemmatized with Stanford CoreNLP).</li>
              </ol>
            </li>
            <li>If significant negatively labeled data exist, determine what viewers did not enjoy by using the previously mentioned NLP tools.</li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <button type="button" onClick={handleNext} title="Next">
          <ArrowRight size={42} />
        </button>
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/overview">
          <ChevronsDown size={72} />
        </Link>
      </div>

    </main>
  );
}
