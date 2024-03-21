import React from 'react';

const data = {
  USA: [
    { src: '/USA/Bridgerton.jpeg', alt: 'Image 1', synopsis: ''},
    { src: '/USA/virgin.jpg', alt: 'Image 2', synopsis: '' },
    { src: '/USA/You.jpeg', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  UAE: [ 
    { src: '/UAE/alchemy.jpg', alt: 'Image 1', synopsis: '' },
    { src: '/UAE/business.jpg', alt: 'Image 2', synopsis: '' },
    { src: '/UAE/hometown.png', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  Germany: [ 
    { src: '/Germany/betty.jpg', alt: 'Image 1', synopsis: '' },
    { src: '/Germany/Bridgerton.jpeg', alt: 'Image 2', synopsis: '' },
    { src: '/Germany/outerbanks.jpeg', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  Japan: [ 
    { src: '/Japan/apoth.jpeg', alt: 'Image 1', synopsis: '' },
    { src: '/Japan/crash.jpg', alt: 'Image 2', synopsis: '' },
    { src: '/Japan/king.webp', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  Kenya: [ 
    { src: '/Kenya/Bridgerton.jpeg', alt: 'Image 1', synopsis: '' },
    { src: '/Kenya/marked.jpeg', alt: 'Image 2', synopsis: '' },
    { src: '/Kenya/sex.jpg', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  Mexico: [ 
    { src: '/Mexico/betty.webp', alt: 'Image 1', synopsis: '' },
    { src: '/Mexico/reina.jpg', alt: 'Image 2', synopsis: '' },
    { src: '/Mexico/plata.jpg', alt: 'Image 3', synopsis: '' },
    // Add more images as needed
  ],
  // Add more countries and images as needed
};

const MostPopularRomances = () => {
    return (
      <div className="most-popular-romances" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {Object.entries(data).map(([country, images]) => (
          <div key={country} className="country-images" style={{ marginBottom: '20px' }}>
            <h3>{country}</h3>
            <div className="image-row-container" style={{ overflowX: 'auto', }}>
              <div className="image-row" style={{ display: 'flex', gap: '20px' }}>
                {images.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} style={{ width: '300px', height: '375px', objectFit: 'cover', marginTop: '20px' }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default MostPopularRomances;
