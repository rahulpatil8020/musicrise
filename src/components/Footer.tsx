// import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">MusicRise</h3>
            <p className="text-gray-300">Your Perfect Productivity Companion</p>
          </div>
          <div className="flex space-x-6">
            {/* <a href="#" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={24} />
            </a> */}
            <a
              href="mailto:contact@appmattersllc.com"
              className="hover:text-blue-400 font-bold"
            >
              contact@appmattersllc.com{" "}
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AppMatters LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
