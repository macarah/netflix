import React, { useState } from 'react';
import { ChevronsDown, type LucideIcon,
} from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '/app/globals.css';

const data = {
  'United States of America': [
    { src: '/USA/Bridgerton.jpeg', alt: 'Image 1', synopsis: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels."},
    { src: '/USA/virgin.jpg', alt: 'Image 2', synopsis: 'Searching for a fresh start, a nurse practitioner moves from LA to a remote northern California town and is surprised by what — and who — she finds.' },
    { src: '/USA/You.jpeg', alt: 'Image 3', synopsis: 'A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.' },
  ]
};

export default function USA() {
  // State variables to track hovered image and its synopsis
  const [hoveredImage, setHoveredImage] = useState(null);
  const [synopsis, setSynopsis] = useState('');

  // Function to handle mouse enter event
  const handleMouseEnter = (image: any, synopsis:any) => {
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
        <Link href="/overview">
          <div className="flex items-center">
            <ArrowLeft size={24} />
            <span className="ml-2">Back</span>
          </div>
        </Link>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Popular Romance Shows in the United States
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem', maxWidth: '100%' }}>
        {Object.entries(data).map(([country, images]) => (
          <div key={country}>
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

      <div className="max-w-5xl mx-auto w-full">
  <p className="text-center text-lg mt-4 mb-8">From the <b>Bridgerton: Season 2</b> subreddit, we observed that comments with a positive sentiment score mainly highlighted the chemistry between characters Kate and Anthony, along with references to similarities between the show and the book. On the other hand, comments with a negative sentiment score often mentioned disparities between the show and the book, the presence of a love triangle, and the lack of a build up in the relationship between Kate and Anthony. The table below highlights the positive and negative comments that reference both Kate and Anthony:</p>
  <div className="flex justify-center mb-8">
    <div className="image-container" style={{ marginRight: '1rem' }}>
      <p className="text-center font-bold">Negative</p>
      <img className="enlarge-on-hover" src="/USA/KA_neg.png" alt="Negative Sentiment" />
    </div>
    <div className="image-container" style={{ marginLeft: '1rem' }}>
      <p className="text-center font-bold">Positive</p>
      <img className="enlarge-on-hover" src="/USA/Kate_Anthony.png" alt="Positive Sentiment" />
    </div>
  </div>
  <p className="text-center text-lg mt-2 mb-8">Approximately 22% of the 718 unique negative Bridgerton comments referred to Kate and/or Anthony. From the negative table of subreddit comments, we see a general frustration amongst the audience in the lack of a focus on the plot of Kate and Anthony, leaving viewers disappointed in the lack of &quot;fluff&quot;, a &quot;happy ending&quot;, and &quot;passion.&quot; In contrast, of the 420 unique positive reviews, approximately 16% referenced Kate and/or Anthony. From the positive table of subreddit comments, we see that there is a general love for the chemistry between Kate and Anthony amongst the audience. It is worth noting that 19% of the positive comments referenced the book and 10% of the negative comments referenced the book indicating a strong book-appreciating viewership.</p>
</div>

<div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>

<div className="max-w-5xl mx-auto w-full">
  <p className="text-center text-lg mt-2 mb-8">From the <b>Virgin River: Season 4</b> subreddit, positive sentiment comments primarily emphasized the chemistry between characters Brie and Brady, as well as Mel and Jack. Additionally, they noted the frequent use of subjunctive mood verbs like &quot;I hope,&quot; &quot;I prefer,&quot; and &quot;I think,&quot; reflecting the speculative nature enabled by the show&apos;s continuity, which engages the audience. Conversely, negative sentiment comments often critiqued the perceived shortcomings in the relationship between Mel and Jack, along with expressing disapproval of the relationship between Brie and Mark. These negative remarks utilized verbs such as &quot;hate,&quot; &quot;stress,&quot; &quot;annoy,&quot; and &quot;irritate&quot; to convey dissatisfaction with certain character interactions, character development, and scenes.</p>
  <div className="flex justify-center mb-8">
    <div className="image-container" style={{ marginRight: '1rem' }}>
      <p className="text-center font-bold">Negative</p>
      <img src="/USA/virgin_nerneg.png" alt="Negative Sentiment" />
    </div>
    <div className="image-container" style={{ marginLeft: '1rem' }}>
      <p className="text-center font-bold">Positive</p>
      <img src="/USA/virgin_nerpos.png" alt="Positive Sentiment" />
    </div>
  </div>
  <p className="text-center text-lg mt-2 mb-8">From the table we see a noticeable difference in the character Charmaine&apos;s standing which is significantly higher on the negative table. According to the comments this is due to a plot twist in which she sparked the enragement of the audience after she lied about her pregnancy and baby daddy. The negative comments surrounding Jack are also about the baby-daddy scare. The negative comments about Brady stem from viewer belief that Brie is &quot;too good&quot; for Brady. The negative comments don’t necessarily reflect bad writing or acting, but, instead, the frustration and opinions of viewers about certain events and characters which retains viewer engagement.</p>
</div>

<div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>

<div className="max-w-5xl mx-auto w-full">
  <p className="text-center text-lg mt-2 mb-8">From the <b>You: Season 2</b> subreddit, we observed that comments with a positive sentiment score mainly highlighted their love for the character Love and the dynamic between Love and Joe. Their “partners in crime” relationship was compared to iconic duos such as <i>Bonnie &amp; Clyde, Santa Clarita Diet, Gomex &amp; Maria, and Mr. and Mrs. Smith.</i> Conversely, comments with negative sentiment scores focused less on specific dislikes about the show and more on the emotions evoked during particular scenes and character actions. Interestingly, these negative emotions, usually associated with unfavorable aspects, contribute to viewer engagement by immersing them in the complex emotional landscape of Joe&apos;s romantic life. Approximately 15% of the negative subreddit comments and 14% of the positive subreddit comments refer to both Joe and Love directly. After filtering out these comments in their respective sentiment categories, the following WordClouds were produced:</p>
  <div className="flex justify-center mb-8">
    <div className="image-container" style={{ marginRight: '1rem' }}>
      <p className="text-center font-bold">Negative</p>
      <img src="/USA/NLP_WC_JoeLove_neg_sentences_img.png" alt="Negative Sentiment" />
    </div>
    <div className="image-container" style={{ marginLeft: '1rem' }}>
      <p className="text-center font-bold">Positive</p>
      <img src="/USA/NLP_WC_JoeLove_sentences_img.png" alt="Positive Sentiment" />
    </div>
  </div>
  <p className="text-center text-lg mt-2 mb-8">The WordClouds summarizing the positives of Joe and Love&apos;s relationship indicate an audience liking towards the “dynamics” between Joe and Love which seem to involve “killing” and “chemistry” which contribute to the audience&apos;s emotions of entertainment, excitement, and interest. From the negative WordCloud visualizing Joe and Love’s relationship, we see that “killing” and subsequent “murders” is a source of discontent for the audience along with characters displaying “impulsiveness” and “craziness”. Because of the spoilers contained in the majority of comments, the analysis of You is missing specific details on what the audience favors about the plot. However, it can be generalized by the WordClouds produced.</p>
</div>

<div className="max-w-5xl mx-auto w-full" style={{ borderTop: '2px dashed white', marginTop: '20px', marginBottom: '20px' }}></div>

<div className="max-w-5xl mx-auto w-full">
  <p className="text-center text-lg mt-2 mb-8">Overall, the success of these popular romance shows in the USA can be attributed to a combination of compelling character dynamics, faithful adaptation from source material, and the ability to evoke strong emotions, both positive and negative, among viewers. These elements collectively contribute to the shows&apos; widespread appeal and sustained popularity within the romance genre. It&apos;s worth noting that there is a higher frequency of negative sentiment across all shows, which reflects the depth of discussion and diverse thoughts generated by the narratives. This doesn&apos;t necessarily imply that the shows are bad; rather, it indicates the complexity of themes and character interactions, sparking engaging discourse among the audience.</p>
</div>

<div className="max-w-5xl w-full">
  <div className="flex justify-center mb-8">
    <img src="/USA/USA_sentiment_split.png" alt="Sentiment Split" />
  </div>
</div>

<div className="flex flex-col items-center mb-8 mt-5">
  <Link href="/germany"> {/* Wrap with Link component */}
    <ChevronsDown size={72} />
  </Link>
</div>

    </main>
  );
}
