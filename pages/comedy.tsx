import React, { useState } from 'react';

export default function Comedy() {
  // State variables to track hover state for each image
  const [hoveredImages, setHoveredImages] = useState(Array(18).fill(false));

  // Function to handle mouse enter event
  const handleMouseEnter = (index: number) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = true;
    setHoveredImages(newHoveredImages);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (index: number) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = false;
    setHoveredImages(newHoveredImages);
  };

    // Create an array of indices from 0 to 5
    const rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(i);
    }
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '100%', overflowX: 'auto' }}>
          {rows.map((rowIndex) => (
            <div key={rowIndex} style={{ marginBottom: '1rem' }}>
              <h2>Row {rowIndex + 1}</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[...Array(3)].map((_, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  return (
                    <div className="mb-4" key={index} style={{ flex: '0 0 calc(33.333% - 1rem)', position: 'relative' }}>
                      <div
                        className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img
                          src='/USA/Bridgerton.jpeg'
                          className="max-w-xs"
                          alt="Louvre"
                          style={{ width: '100%', height: 'auto' }}
                        />
                        {hoveredImages[index] && (
                          <div className="mask" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                              <p className="text-white mb-0">Can you see me?</p>
                            </div>
                          </div>
                        )}
                        <div
                          className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out ${
                            hoveredImages[index] ? 'hover:opacity-50' : 'hover:opacity-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }