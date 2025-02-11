// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 font-bold">
          <button onClick={() => navigate("/")} className="text-xl font-bold">
            MusicRise
          </button>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => navigate("/privacy")}
            >
              Privacy
            </button>
            {/* </Link> */}
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/musicrise/id6453411573"
            >
              <img src="download.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
