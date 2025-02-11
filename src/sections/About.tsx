function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="prose max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          We're passionate about helping people make the most of their time. Our timer app combines
          productivity tools with the power of music to create the perfect environment for focus,
          relaxation, and productivity.
        </p>
        <p className="text-lg mb-6">
          Born from the need for a better timer experience, we've created an app that understands
          the importance of both time management and the motivational power of music.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To enhance productivity and well-being through innovative time management solutions
            that seamlessly integrate with your music preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;