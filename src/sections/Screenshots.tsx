function Screenshots() {
  const screenshots = [
    {
      image: "/IMG_2192.PNG",
      title: "Focus Timer Interface",
      description: "Set custom focus intervals and track your productivity",
    },
    {
      image: "/IMG_2193.PNG",
      title: "Sleep Timer Interface",
      description: "Configure your sleep timer with music fade-out options",
    },
    {
      image: "/IMG_2194.PNG",
      title: "Music Integration",
      description:
        "Seamlessly connect with Apple Music for the perfect soundtrack",
    },
    {
      image: "/IMG_2195.PNG",
      title: "Statistics Dashboard",
      description: "Track your productivity trends and achievements",
    },
    {
      image: "/IMG_2197.PNG",
      title: "Settings Panel",
      description: "Customize your experience with advanced settings",
    },
    {
      image: "/IMG_2198.PNG",
      title: "Quick Timer",
      description: "Access frequently used timer presets",
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-8">App Screenshots</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Take a closer look at our beautiful, intuitive interface designed to enhance your productivity
          </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {screenshot.description}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* <p className="text-gray-600 mb-8">
            Experience these features and more in our timer app
          </p> */}
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/musicrise/id6453411573"
            className="inline-block px-8 py-3 rounded-lg transition-colors"
          >
            <img
              className="h-16"
              src="/download.svg"
              alt="Download on the App Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Screenshots;
