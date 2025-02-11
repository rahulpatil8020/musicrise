function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-6xl font-bold text-center mb-2 mt-10">MusicRise</h1>
      <p className="text-4xl  text-center mb-10 text-gray-600">
        Producitivity Music Player
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Music Timer</h2>
          <p className="text-gray-600 mb-4">
            Stay focused with customizable music timers
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Flow Timer</h2>
          <p className="text-gray-600 mb-4">
            Achieve deep work with your favorite tunes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Sleep Timer</h2>
          <p className="text-gray-600 mb-4">
            Fall asleep peacefully to your favorite tunes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Music Alarm</h2>
          <p className="text-gray-600 mb-4">
            Wake up refreshed with personalized music.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-12">
        <h2 className="text-2xl font-semibold mb-4">Apple Music Integration</h2>
        <p className="text-gray-600 mb-4">
          Seamlessly integrate with Apple Music to create the perfect soundtrack
          for your activities.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Create productivity actions from your Apple Music library.</li>
          {/* <li>Customize timers for different tasks</li> */}
          <li>Curated Music for different activities</li>
        </ul>
      </div>
      <div className="text-center mt-24 text-gray-600 hidden sm:block">
        <a href="#screenshots">Scroll down for more features</a>
      </div>
      {/* <div className="text-center hidden sm:block">v</div> */}
    </div>
  );
}

export default Features;
