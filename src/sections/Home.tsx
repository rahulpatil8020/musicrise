// import React from "react";
import Features from "./Features";
import Screenshots from "./Screenshots";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffedd4]">
      <main className="flex-grow">
        <section id="features">
          <Features />
        </section>
        <section id="screenshots">
          <Screenshots />
        </section>
      </main>
    </div>
  );
};

export default Home;
