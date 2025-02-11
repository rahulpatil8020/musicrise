import React from "react";

const Privacy: React.FC = () => {
  // const newLocal = <img
  //   src={policy.imgSrc}
  //   alt={policy.alt}
  //   className="w-full h-48 object-cover" />;
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Privacy Policy for MusicRise
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AppMatters LLC values MusicRise users' privacy above all. Our Privacy
          Policy highlights our no-data-collection stance, ensuring your use is
          secure and private.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          {
            title: "No Personal Data Collection",
            description:
              "MusicRise does not collect, store, use, or share any personal data. The app functions without accessing your personal information.",
            alt: "No Data Collection",
          },
          {
            title: "Use of Apple Music",
            description:
              "MusicRise integrates with Apple Music for playback functionalities. All interactions are secured by Apple's privacy policies.",
            alt: "Apple Music Integration",
          },
          {
            title: "No Third-Party Data Sharing",
            description:
              "Since we do not collect personal data, there is nothing to share with third parties. Your privacy remains protected.",
            alt: "Privacy Protection",
          },
        ].map((policy, index) => (
          <div
            key={index}
            className="flex flex-col text-center p-6 bg-white rounded-lg shadow-lg overflow-hidden h-full"
          >
            {/* <div className="mb-6 rounded-lg overflow-hidden">
              {newLocal}
            </div> */}
            <h3 className="text-xl font-semibold mb-4 flex-grow">
              {policy.title}
            </h3>
            <p className="text-gray-600">{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
