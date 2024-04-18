import React, { useState } from 'react';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';
const data = {
    Germany: [ 
        { src: '/Germany/betty.jpg', alt: 'Image 1', synopsis: "Beatriz Aurora Rincon Lozano, a young climber, takes a job at V&M Fashion as secretary to the company president." },
        { src: '/Germany/Bridgerton.jpeg', alt: 'Image 2', synopsis: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels."},
        { src: '/Germany/outerbanks.jpeg', alt: 'Image 3', synopsis: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance."},
        // Add more images as needed
      ]}

export default function Germany() {
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
        <Link href="/usa">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Popular Romance Shows in Germany
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
      <p className="text-center text-lg mt-10 mb-8">Because of the lack of substantial data and popular German discussion online forums, we had limited data in the analysis of the three most popular German romance shows. Therefore, a close reading approach was most effective. The following data was analyzed for the top 3 Netflix romance television series in Germany:</p>
      </div>
      <div>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>* Close reading of the Bridgerton discussion posts from the German online discussion forum: <a href="https://www.heise.de/forum/suche/?forum=1&sort=d&q=bridgerton&rm=search&offset=15" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>&quot;Heisse Online&quot;</span></a> </li>
          <li style={{ marginBottom: '0.5rem' }}>* Close reading of Bridgerton discussion posts from the German online discussion forum: <a href="https://www.wunschliste.de/serie/bridgerton/forum#google_vignette" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>TV Wunschliste Forum</span></a></li>
          <li style={{ marginBottom: '0.5rem' }}>* Close reading of Bridgerton articles from the Google search of <a href="https://www.google.com/search?q=Diskussion+zur+zweiten+Staffel+von+Bridgerton&oq=Diskussion+zur+zweiten+Staffel+von+Bridgerton&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBBzQ1MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>Diskussion zur zweiten Staffel von Bridgerton</span></a></li>
          <li style={{ marginBottom: '0.5rem' }}>* Close reading of Betty en NY discussion posts from the German online discussion forum: <a href="http://215072.homepagemodules.de/t528751f11776744-Betty-in-New-York-USA.html" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>Synchron Forum</span></a></li>
          <li style={{ marginBottom: '0.5rem' }}>* Close reading of Betty en NY discussion posts for more information to compare from the Reddit subreddit <a href="https://www.reddit.com/r/BettyenNY/comments/mq32dl/spoilers_series_discussion/" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>r/BettyenNY</span></a></li>
          <li style={{ marginBottom: '0.5rem' }}>* Tik Toks with the tags &quot;Outer Banks&quot; and &quot;German&quot; <a href="https://www.tiktok.com/discover/outer-banks-german" target="_blank" rel="noopener"><span style={{ color: 'blue' }}>Tik Tok Link</span></a></li>

        </ul>
      </div>


      <div className="max-w-5xl w-full">
        <p className="text-center text-lg mt-10 mb-8">In conclusion, the reception of romance Netflix shows in Germany reflects a diverse range of opinions and sentiments. On one hand, there is a segment of the audience that appreciates the entertainment value of series like &quot;Bridgerton,&quot; praising its production quality and engaging narrative despite historical inaccuracies and controversies surrounding casting choices. For instance, one viewer expressed, &quot;I felt very entertained and am really looking forward to the next seasons. Excellently done, Netflix!&quot; However, there is also a notable portion of viewers who express dissatisfaction, citing concerns about the portrayal of historical events, the lack of adherence to source material, and criticisms of the diversity and representation in the cast. As evidenced by comments such as, &quot;Doesn't have much in common with the original book series, I find the series disappointing.&quot; As one comment puts it, "Things get really bad when historical truths are twisted just for the sake of wokeness. &apos;Bridgerton,&apos; for example, thrives on it,&quot; expressing frustration over deviations from historical facts and perceived distortions for the sake of storytelling. Furthermore, there is notable audience discontent regarding the lack of sex scenes in certain series, such as &quot;Bridgerton,&quot; where comments like, &quot;Unfortunately, I got bored and that wasn't due to the possible lack of sex scenes,&quot; highlight viewer expectations for explicit content.</p>
        <p className="text-center text-lg mt-10 mb-8">Furthermore, the reception of other romance series like &quot;Betty en NY&quot; and &quot;Outer Banks&quot; also varies, with some viewers praising aspects such as dubbing quality and character portrayal, while others express disappointment with certain plot elements, character dynamics, and overall execution. For example, feedback on &quot;Betty en NY&quot; ranged from praise for the synchronization quality of the German dub, with one viewer noting, &quot;The synchronization turned out really great,&quot; to criticisms of poor ratings overall and annoyance at certain character appearances and behavior. The most reasonable assumption for the high viewership of &quot;Betty en NY&quot; is likely due to the previous success of &quot;Betty la Fea&quot; on Netflix Germany. However, there is a consensus that the newer version did not measure up to the expectations set by the original version.</p>
        <p className="text-center text-lg mt-10 mb-8">It's important to note that synchronization, referring to the dubbing of shows, holds particular significance in Germany, where there is a predilection towards dubbed dialogues for foreign films and series. Overall, the discussion surrounding romance Netflix shows in Germany highlights the complexity of audience preferences and the importance of balancing entertainment value with cultural authenticity and representation. Despite differing opinions, it's evident that these shows evoke strong reactions and spark meaningful discussions among viewers, underscoring the significance of diverse storytelling in the realm of streaming entertainment.</p>
      </div>

      <div className="flex flex-col items-center mb-8 mt-5">
        <Link href="/japan"> {/* Wrap with Link component */}
            <ChevronsDown size={72} />
        </Link>
      </div>
     </main>
  );
}
