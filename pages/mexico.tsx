import React, { useState } from 'react';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';
const data = {
    Mexico: [ 
        { src: '/Mexico/betty.webp', alt: 'Image 1', synopsis: "An aspiring writer works her way up the ladder at a fashion magazine, despite her questionable wardrobe choices and doubting coworkers." },
        { src: '/Mexico/reina.jpg', alt: 'Image 2', synopsis: "After years of blood, sweat and tears, a woman from humble beginnings finds herself in the perilous position of being a legend in drug trafficking." },
        { src: '/Mexico/plata.jpg', alt: 'Image 3', synopsis: "Poor salesman Rafael and wealthy business executive Alejandra are two strangers who suffer a car accident that changes their lives and intertwines their futures."},
        // Add more images as needed
      ]}

export default function Mexico() {
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
        <Link href="/japan">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Popular Romance Shows in Mexico
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
      <p className="text-center text-lg mt-10 mb-8">The following data was collected for the top 3 Netflix romance television series in Mexico:</p>
      </div>
      <div>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>* 497 Facebook comments scraped from the <a href="https://www.facebook.com/photo/?fbid=804137125080345&set=a.451158170378244" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>Hasta Que La Plata Nos Separe</span></a> post by the page Tlnovelas Fans which has 2.4 million followers and Spanish as the primary language.</li>
          <li style={{ marginBottom: '0.5rem' }}>* 624 Facebook comments scraped from the <a href="https://fb.watch/rhNrbKoC_h/" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>La Reina del Sur</span></a> post by the page Muy Netflix which has 5.5 million followers and Spanish as the primary language.</li>
          <li style={{ marginBottom: '0.5rem' }}>* Yo Soy Betty la Fea has many remakes all over the world based on the original Colombian telenovela. Yo Soy Betty la Fea premiered in Mexico on Netflix and is popular in Honduras as well. Because there are multiple versions of Betty la Fea, there is limited data in discussions about the Mexican version of the show beyond that of comparisons to the Colombian version by, predominantly, South Americans.</li>
        </ul>
      </div>

      <div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>

      <div className="max-w-5xl w-full">
      <h1 className='text-center text-lg mt-10 mb-8 font-bold'>Hasta Que la Plata Nos Separe</h1>

        <p className="text-center text-lg mt-10 mb-8">
          The analysis of comments on the Facebook post regarding the show &quot;Hasta Que La Plata Nos Separe&quot; reveals a predominantly positive sentiment, with viewers expressing enjoyment and engagement particularly with the comedic aspects of the show. Based on the Word Cloud, adjectives like &quot;funny,&quot; &quot;fun,&quot; &quot;laugh,&quot; and &quot;entertaining&quot; are frequently used, indicating a strong appreciation for the humor within the series.
        </p>
      <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginRight: '1rem', maxWidth: 500 }}>
          <p className="text-center font-bold mb-5">POS Tagged Word Cloud for Positive Comments</p>
          <img src="/Mexico/NLP_WC_laPlata_positive_sentences_img.png" alt="POS cloud plata" />
        </div>
      </div>
        <p className="text-center text-lg mt-10 mb-8">
          However, there appears to be a lack of focus on the specific characters and actors, as evidenced by the BERT NER analysis. While Pedro Fernandez, known for his role in a previous version of the show, garners attention due to his prior popularity as a Mexican singer, songwriter, and actor, there is relatively less discussion about the current lead actors such as Sebastián Martínez and Carmen Villalobos, who portray Rafael Méndez and Alejandra Maldonado respectively.
        </p>
        <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginLeft: '1rem', maxWidth: 500 }}>
          <p className="text-center font-bold mb-5">NER Filtered by Person for Positive Comments</p>
          <img src="/Mexico/plata_ner.png" alt="Positive Sentiment" />
        </div> 
      </div>
        <p className="text-center text-lg mt-10 mb-8">
          This suggests that while the audience retains familiarity with certain key figures from previous iterations of the show, their attention may not be as strongly directed towards the current cast and character dynamics. Nevertheless, the overall sentiment towards the show remains positive, driven by its comedic elements and engaging storyline.
        </p>

      </div>

      <div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>

      <div className="max-w-5xl w-full">
        <h1 className='text-center text-lg mt-10 mb-8 font-bold'>La Reina del Sur</h1>
      <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginRight: '1rem', maxWidth: 500 }}>
          <p className="text-center font-bold mb-5">POS Tagged Word Cloud for Positive Comments</p>
          <img src="/Mexico/reina_ner.png" alt="POS cloud reina" />
        </div>
      </div>
        <p className="text-center text-lg mt-10 mb-8">
        The affection directed towards the female protagonist, both the actress Kate del Castillo and her character Tereza Mendoza, is palpable, with descriptors like &quot;strong&quot; and &quot;beautiful&quot; frequently used to portray Tereza. This admiration stems from the narrative&apos;s focus on Tereza&apos;s ascent from a young woman in Mexico to the formidable drug lord reigning over southern Spain. The audience&apos;s appreciation for Tereza&apos;s strength and resilience as a central figure in the romantic storyline is evident.        </p>
        <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginLeft: '1rem', maxWidth: 500 }}>
          <p className="text-center font-bold mb-5">NER Filtered by Person for Positive Comments</p>
          <img src="/Mexico/el_pote.png" alt="Positive Sentiment" />
        </div> 
      </div>
        <p className="text-center text-lg mt-10 mb-8">
          Furthermore, there&apos;s a notable presence of references to &quot;El Pote&quot; in both the NER analysis and n-grams. Upon further Google investigation into &quot;El Pote y Tereza,&quot; fan discussions underscore the profound love and unwavering loyalty El Pote harbors for Tereza, positioning him as a trusted friend in her eyes. The unexpected popularity of El Pote among viewers is intriguing, especially considering that Teresa&apos;s romantic interest in the series lies with James, who receives very little mention in the comments.
        </p>
        <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginLeft: '1rem', maxWidth: 500 }}>
          <p className="text-center font-bold mb-5">NER Filtered by Person for Positive Comments</p>
          <img src="/Mexico/NLP_WC_laReina_positive_sentences_img.png" alt="Positive Sentiment" />
        </div> 
      </div>
      <p className="text-center text-lg mt-10 mb-8">
        Examining the Word Cloud, it&apos;s apparent that viewers of &quot;La Reina del Sur&quot; are drawn to narrative elements involving themes of &quot;killing,&quot; &quot;betrayal,&quot; and &quot;death.&quot; This indicates an appreciation for the dramatic tension and high stakes inherent in the storyline, suggesting that viewers are captivated by the intricate web of intrigue and danger that surrounds Tereza Mendoza's journey.
      </p>

      <div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>
      
      <div className="flex justify-center mt-8 mb-8">
        <div className="image-container" style={{ marginRight: '1rem', maxWidth: 700 }}>
          <h1 className="text-center font-bold mb-5">Conclusion:</h1>
          <img src="/Mexico/bert.png" alt="POS cloud reina" />
          <p className="text-center text-lg mt-10 mb-8">
          In conclusion, the analysis indicates a notably higher frequency of positive comments compared to negative ones among Latino viewers of Netflix-Mexico&apos;s most popular romance shows. This trend underscores a viewer culture that strongly embraces and celebrates television series production. Moreover, there is a discernible shift in focus away from the love interests and actors who held significant roles in series previously viewed by audiences in the USA and Japan. Instead, despite the genre being romance, Mexican Netflix viewers exhibit a preference for the plot's comical and dramatic elements. These characteristics align closely with the tropes often found in telenovelas popular across Latin America.
          </p>
        </div>

      </div>

      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>
     </main>
  );
}
