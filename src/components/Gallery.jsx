import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - replace with your actual images
  const images = [
    {
      id: 1,
      src: '/images/gallery/1.jpg',
      title: 'Puja Ceremony',
      description: 'Traditional puja ceremony in progress'
    },
    {
      id: 2,
      src: '/images/gallery/2.jpg',
      title: 'Devotees Gathering',
      description: 'Devotees gathered for the ceremony'
    },
    {
      id: 3,
      src: '/images/gallery/3.jpg',
      title: 'Prasad Distribution',
      description: 'Distribution of prasad to devotees'
    },
    {
      id: 4,
      src: '/images/gallery/4.jpg',
      title: 'Aarti Ceremony',
      description: 'Evening aarti ceremony'
    },
    {
      id: 5,
      src: '/images/gallery/5.jpg',
      title: 'Flower Decoration',
      description: 'Beautiful flower decorations'
    },
    {
      id: 6,
      src: '/images/gallery/6.jpg',
      title: 'Pandal Setup',
      description: 'Main pandal setup for the ceremony'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore moments from our previous ceremonies and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 