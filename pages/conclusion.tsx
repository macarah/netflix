import React, { useState } from 'react';
import { ArrowLeft, ChevronsDown } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';

const data = {
  'United States of America': [
    { src: '/USA/Bridgerton.jpeg', alt: 'Image 1', synopsis: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels."},
    { src: '/USA/virgin.jpg', alt: 'Image 2', synopsis: 'Searching for a fresh start, a nurse practitioner moves from LA to a remote northern California town and is surprised by what — and who — she finds.' },
    { src: '/USA/You.jpeg', alt: 'Image 3', synopsis: 'A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.' },
    // Add more images as needed
  ],
  Germany: [ 
    { src: '/Germany/betty.jpg', alt: 'Image 1', synopsis: "Beatriz Aurora Rincon Lozano, a young climber, takes a job at V&M Fashion as secretary to the company president." },
    { src: '/Germany/Bridgerton.jpeg', alt: 'Image 2', synopsis: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels."},
    { src: '/Germany/outerbanks.jpeg', alt: 'Image 3', synopsis: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance."},
    // Add more images as needed
  ],
  Japan: [ 
    { src: '/Japan/apoth.jpeg', alt: 'Image 1', synopsis: "Obsessed with poison and medicine, a servant in the Emperor's palace draws on her roots as a healer in the red light district to solve mysterious cases." },
    { src: '/Japan/crash.jpg', alt: 'Image 2', synopsis: "A paragliding mishap drops a South Korean heiress in North Korea -- and into the life of an army officer, who decides he will help her hide." },
    { src: '/Japan/king.webp', alt: 'Image 3', synopsis: "When the crown prince is killed, his twin sister assumes the throne while trying to keep her identity and affection for her first love a royal secret." },
    // Add more images as needed
  ],
  Mexico: [ 
    { src: '/Mexico/betty.webp', alt: 'Image 1', synopsis: "An aspiring writer works her way up the ladder at a fashion magazine, despite her questionable wardrobe choices and doubting coworkers." },
    { src: '/Mexico/reina.jpg', alt: 'Image 2', synopsis: "After years of blood, sweat and tears, a woman from humble beginnings finds herself in the perilous position of being a legend in drug trafficking." },
    { src: '/Mexico/plata.jpg', alt: 'Image 3', synopsis: "Poor salesman Rafael and wealthy business executive Alejandra are two strangers who suffer a car accident that changes their lives and intertwines their futures."},
    // Add more images as needed
  ],
};

export default function Conclusion() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [synopsis, setSynopsis] = useState('');

  const handleMouseEnter = (image: any, synopsis:any) => {
    setHoveredImage(image);
    setSynopsis(synopsis);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
    setSynopsis('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/mexico">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Conclusion
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
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
            {/* New div for custom text */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Viewers Enjoy:</h3>
              {country === 'United States of America' && (
                <div>
                  <ul>
                    <li>* On-screen chemistry.</li>
                    <li>* Sex scenes.</li>
                    <li>* Relationship hardships and the discussions they spark.</li>
                    <li>* A partners in crime storyline.</li>
                    <li>* To focus more on characters rather than actors/actress.</li>
                    <li>* A show where the plot does not stray from book.</li>
                  </ul>
                </div>
              )}
              {country === 'Germany' && (
                <div>
                <ul>
                  <li>* A balance between German seriousness and humor portrayed in the dubbed versions.</li>
                  <li>* The balance of entertainment with cultural and historical authenticity yet still appreciate diversity in casting.</li>
                  <li>* Sex scenes.</li>
                  <li>* Viewing foreign content but do not enjoy an excessive amount of remakes.</li>
                  <li>* Focus more on characters rather than actors/actress.</li>
                  <li>* A show where the plot does not stray from book.</li>
                </ul>
              </div>
              )}
              {country === 'Japan' && (
                <div>
                <ul>
                  <li>* The fawning-culture for actors and actresses through the formation of a strong emotional connection similar to K-pop culture.</li>
                  <li>   (The use of actors and actresses with a strong fan base contribute significantly to popularity of a K-drama)</li>
                  <li>* Unexpected and unrealistic romance plots...ultimate love.</li>
                </ul>
              </div>
              )}
              {country === 'Mexico' && (
                <div>
                <ul>
                  <li>* The portrayal of strong female leads.</li>
                  <li>* A plot with strong elements of drama and/or humor. This seems to hold more importance than the romance itself.</li>
                  <li>* The production of telenovelas.</li>
                </ul>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>
      
      <div className="max-w-5xl w-full">
        <p className="text-center text-lg font-bold">Limitations of the Analysis</p>
        <p className="text-center text-lg mt-5 mb-8 space-y-5"></p>
        <ul>
                  <li>* Although countries with high amounts of subscribers were selected, the data collected from the social media platforms are not completely representative of viewership across the respective countries. Especially considering the socio-economic status and demographics of the participants of the selected social media platforms.</li>
                  <li>* For the data collected from the countries of Germany, Mexico, and Japan, the translation of the viewer comments was conducted using Google Translate. Because Google Translate is not 100% accurate in translations for any of these languages, there exists the potential of mis-translations in the translated textual data.</li>
                  <li>* Because of the limited data that could be collected from the discussion forums for the four countries, the data to run the NLP analysis may not have bee substantial enough to from significant conclusions about the country populations.</li>
        </ul>
      </div>


      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/"> {/* Wrap with Link component */}
          <ChevronsDown size={72} />
        </Link>
      </div>
    </main>
  );
}
