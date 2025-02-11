function Home() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Productivity Music Player
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience productivity with our innovative application featuring
          Apple Music integration
        </p>
        <button
          onClick={scrollToFeatures}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Features
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          {
            title: "Music Timer",
            description: "Stay productive with our specialized focus timer",
            imgSrc:
              "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format",
            alt: "Music Timer",
          },
          {
            title: "Sleep Timer",
            description: "Fall asleep to your favorite music",
            imgSrc:
              "https://cdn.pixabay.com/photo/2017/08/07/19/19/sleep-2607102_1280.jpg",
            alt: "Sleep Timer",
          },
          {
            title: "Music Integration",
            description: "Seamless Apple Music experience",
            imgSrc:
              "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format",
            alt: "Music Integration",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-center p-6 bg-white rounded-lg shadow-lg overflow-hidden h-full"
          >
            <div className="mb-6 rounded-lg overflow-hidden h-48 w-full bg-slate-400">
              <img
                src={feature.imgSrc}
                alt={feature.alt}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 flex-grow">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
