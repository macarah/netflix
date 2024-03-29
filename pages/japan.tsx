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
        <p className="text-center text-lg mt-10 mb-8">After determining the top 20 Netflix shows for the countries listed below based on their respective cumulative weeks in the Netflix Top Ten list, the 3 most popular romance shows for each of the following countries were extracted:</p>
        <p className="text-center text-lg mt-2 mb-8">***by hovering over images, you can read a synopsis for each show.</p>
      </div>

      <div className="max-w-5xl w-full">
        <p className="text-center text-lg mt-10 mb-8">Simple analysis of the show synopsis and hypothesis of why certain feature might be appealing based on them</p>
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/kenya"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>
     </main>
  );
}