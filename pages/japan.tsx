import React, { useState } from 'react';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';
const data = {
    Japan: [ 
        { src: '/Japan/apoth.jpeg', alt: 'Image 1', synopsis: "Obsessed with poison and medicine, a servant in the Emperor's palace draws on her roots as a healer in the red light district to solve mysterious cases." },
        { src: '/Japan/crash.jpg', alt: 'Image 2', synopsis: "A paragliding mishap drops a South Korean heiress in North Korea -- and into the life of an army officer, who decides he will help her hide." },
        { src: '/Japan/king.webp', alt: 'Image 3', synopsis: "When the crown prince is killed, his twin sister assumes the throne while trying to keep her identity and affection for her first love a royal secret." },
        // Add more images as needed
      ]}

export default function Japan() {
    // State variables to track hovered image and its synopsis
  const [hoveredImage, setHoveredImage] = useState(null);
  const [synopsis, setSynopsis] = useState('');

  // Function to handle mouse enter event
  const handleMouseEnter = (image: any, synopsis: any) => {
    setHoveredImage(image);
    setSynopsis(synopsis);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredImage(null);
    setSynopsis('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/germany">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Popular Romance Shows in Japan
        </p>
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {Object.entries(data).map(([country, images]) => (
        <div key={country} style={{ marginBottom: '1rem', maxWidth: '100%' }}>
          <h2 className="font-bold text-lg mt-10 mb-8">{country}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {images.map((image, index) => (
              <div key={index} style={{ flex: '0 0 calc(33.333% - 1rem)', position: 'relative' }}>
                <div
                  className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                  onMouseEnter={() => handleMouseEnter(image.src, image.synopsis)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={image.src}
                    className="max-w-xs"
                    alt={image.alt}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  {hoveredImage === image.src && (
                    <div className="mask" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <p className="text-white mb-0">{synopsis}</p>
                      </div>
                    </div>
                  )}
                  <div
                    className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out ${
                      hoveredImage === image.src ? 'hover:opacity-50' : 'hover:opacity-0'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      <div className="max-w-5xl w-full">
        <p className="text-center text-lg mt-10 mb-8">The following data was collected for the top 3 Netflix romance television series in Japan:</p>
        <div className="bulleted-list mt-2 mb-8">
          <ul>
            <li>For the show The King&apos;s Affection, 65 tweets were scraped from the Twitter query, 연모 or Yeonmo, and translated from Japanese/Korean to English using Google Translate.</li>
            <li>For the show Crash Landing on You, 109 tweets were scraped from the Twitter query, 愛の不時着, and translated from Japanese to English.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>


      <div className="flex justify-center mb-8">
        <div className="image-container" style={{ marginRight: '2rem', marginLeft: '2rem' }}>
          <p className="text-center font-bold">The King&apos;s Affection: NER</p>
          <img src="/Japan/ner_kings.png" alt="Negative Sentiment" style={{ maxWidth: '400px' }} />
        </div>
        <div className="image-container" style={{ marginRight: '2rem', marginLeft: '2rem' }}>
          <p className="text-center font-bold">Crash Landing on You: NER</p>
          <img src="/Japan/ner_crash.png" alt="Positive Sentiment" style={{ maxWidth: '400px' }} />
        </div>
      </div>

      <div className="max-w-5xl w-full">
        <p className="text-center text-lg mt-5 mb-8">From the BERT NER analysis we see that the fans of the most popular romance television series fawn over the actor/actress rather than the character they play in the series. The main character of The King&apos;s Affection is the Crown Prince Lee Hwi who is played by Park Eun Bin. In the comments with positive sentiment, there were a total of 6 references to Lee Hwi. In contrast, Park Eun Bin was the most mentioned person in the positively scored tweets with a total of 30 references. This trend was also seen for the second most mentioned actor, Rowoon, who starred as Jung Ji Woon in The King&apos;s Affection. We see the special attention of Netflix Japan viewers on the actors and actresses over the characters they play in the series Crash Landing on You as well. This trend highlights the special attention given by Netflix Japan viewers to the actors and actresses rather than the characters they portray, reflecting the loyal fandom culture prevalent in K-pop and K-drama communities, where fans often form strong emotional connections with their favorite performers. This loyal fandom culture extends beyond mere appreciation for their on-screen talents; it encompasses a sense of personal connection and investment in the lives and careers of these artists. By prioritizing the recognition and support of the individuals who bring these characters to life, Netflix Japan viewers contribute to the thriving ecosystem of fan-driven enthusiasm and engagement within the entertainment industry.</p>
      </div>

      <div className="max-w-5xl w-full">
        <p className="text-center font-bold">Sentiment Analysis</p>
        <img src="/Japan/sentiment bar.png" alt="Sentiment" />
        <p className="text-center text-lg mt-5 mb-8">Additionally, we see that the Twitter comments from the Japanese viewers have a significantly higher positive sentiment than negative and neutral. The positive sentiment is unlike what was previously seen in USA subreddits for the most popular romance shows. This can be attributed to cultural differences between Japan and USA viewers. While viewers in the USA enjoy focusing on the plot of the romance shows and participate in heated discussions and predict what will happen in the next season, viewers in Japan tend to show their support and adoration for the cast, director, and crew through their tweets.</p>
        <p className="text-center text-lg mt-5 mb-8">Because of the lack of online discussions available for the show The Apothecary Diaries, we were unable to extract substantial data to analyze the reactions and opinions of Netflix Japan viewers.</p>
      </div>
      
      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/mexico"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>
     </main>
  );
}
