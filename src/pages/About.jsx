const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              About Vipra Jyoti Puja
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our journey of spiritual enlightenment and divine blessings
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Vipra Jyoti Puja was founded with a vision to bring divine blessings
              and spiritual enlightenment to people's lives. Our journey began
              with a simple mission: to make sacred rituals accessible to all
              while maintaining their authenticity and spiritual significance.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Over the years, we have served thousands of devotees, helping them
              connect with their spiritual selves through our carefully curated
              puja services and ceremonies.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experienced priests and spiritual guides ensures that
              every ritual is performed with utmost devotion and precision,
              creating a truly transformative experience for our devotees.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We are committed to preserving and promoting the rich spiritual
              heritage of our culture while making it relevant to modern times.
              Our mission is to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                <span className="ml-3 text-lg text-gray-600">
                  Provide authentic and meaningful spiritual experiences
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                <span className="ml-3 text-lg text-gray-600">
                  Make sacred rituals accessible to everyone
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                <span className="ml-3 text-lg text-gray-600">
                  Preserve and promote spiritual traditions
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                <span className="ml-3 text-lg text-gray-600">
                  Create a community of spiritually connected individuals
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pandit Sharma',
                role: 'Head Priest',
                description:
                  'With over 30 years of experience in performing sacred rituals',
              },
              {
                name: 'Pandit Verma',
                role: 'Senior Priest',
                description:
                  'Specialized in Vedic rituals and ceremonies',
              },
              {
                name: 'Pandit Gupta',
                role: 'Ritual Expert',
                description:
                  'Expert in traditional puja ceremonies and spiritual guidance',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mt-1">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 