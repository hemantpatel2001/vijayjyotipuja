const Services = () => {
  const services = [
    {
      title: 'Ganesh Puja',
      description:
        'Seek the blessings of Lord Ganesh for success, wisdom, and prosperity in all your endeavors.',
      features: [
        'Traditional Ganesh Puja ceremony',
        'Sacred mantras and rituals',
        'Prasad distribution',
        'Personalized blessings',
      ],
    },
    {
      title: 'Lakshmi Puja',
      description:
        'Invoke the divine blessings of Goddess Lakshmi for wealth, prosperity, and abundance.',
      features: [
        'Lakshmi Puja with traditional rituals',
        'Sacred offerings and prayers',
        'Aarti ceremony',
        'Blessings for financial prosperity',
      ],
    },
    {
      title: 'Durga Puja',
      description:
        'Experience the divine power of Goddess Durga through our sacred puja ceremonies.',
      features: [
        'Durga Puja with traditional rituals',
        'Sacred mantras and prayers',
        'Aarti ceremony',
        'Blessings for strength and protection',
      ],
    },
    {
      title: 'Navgrah Puja',
      description:
        'Balance the influence of the nine planets through our specialized Navgrah Puja.',
      features: [
        'Complete Navgrah Puja ceremony',
        'Planetary alignment prayers',
        'Remedial rituals',
        'Personalized horoscope analysis',
      ],
    },
    {
      title: 'Satyanarayan Puja',
      description:
        'Seek the blessings of Lord Satyanarayan for peace, prosperity, and happiness.',
      features: [
        'Traditional Satyanarayan Puja',
        'Sacred storytelling ceremony',
        'Prasad distribution',
        'Family blessings',
      ],
    },
    {
      title: 'Rudra Abhishek',
      description:
        'Experience the divine energy of Lord Shiva through our sacred Rudra Abhishek ceremony.',
      features: [
        'Rudra Abhishek ceremony',
        'Sacred offerings to Lord Shiva',
        'Vedic mantras',
        'Personalized blessings',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Our Puja Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience divine blessings through our sacred rituals and ceremonies
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Experienced Priests
                </h3>
                <p className="text-gray-600">
                  Our team of experienced priests ensures authentic and meaningful
                  ceremonies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Traditional Rituals
                </h3>
                <p className="text-gray-600">
                  We follow traditional rituals and mantras for authentic spiritual
                  experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  We offer personalized services tailored to your specific needs and
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 