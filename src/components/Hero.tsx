import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yayi2 from "../assets/yayi2.png";
import yayi3 from "../assets/Yayi carousel/yayi3.png";
import yayi4 from "../assets/Yayi carousel/yayi4.png";
import yayi6 from "../assets/Yayi carousel/yayi6.jpeg";

const carouselImages = [
  { src: yayi2, position: "object-top" },
  { src: yayi3, position: "object-top" },
  { src: yayi4, position: "object-top" },
  { src: yayi6, position: "object-top" },
  { src: yayi2, position: "object-top" },
  { src: yayi3, position: "object-top" },
  { src: yayi4, position: "object-top" },
  { src: yayi6, position: "object-top" },
];

// Add a clone of the first image at the end for a seamless loop
const extendedImages = [...carouselImages, carouselImages[0]];

function Hero() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImage === carouselImages.length) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setCurrentImage(0);
      }, 1000); // matches the slide transition duration
      return () => clearTimeout(timeout);
    } else {
      setEnableTransition(true);
    }
  }, [currentImage]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:min-h-[130vh] flex flex-col items-center justify-end text-center px-6 pb-12 overflow-hidden"
    >
      <div
        className={`absolute inset-0 flex ${
          enableTransition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{
          width: `${extendedImages.length * 100}%`,
          transform: `translateX(-${currentImage * (100 / extendedImages.length)}%)`,
        }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="Yayi"
            className={`w-full h-full object-cover ${img.position} flex-shrink-0`}
            style={{ width: `${100 / extendedImages.length}%` }}
          />
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center animate-slide-in">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 font-inter leading-tight">
      <span className="text-apc-green text-4xl sm:text-6xl md:text-8xl font-extrabold mr-[-8px] sm:mr-[-12px] md:mr-[-16px]">V</span>
          <span className="text-apc-red">olunteers </span>
          <span className="text-apc-green text-4xl sm:text-6xl md:text-8xl font-extrabold">O</span>
          <span className="text-apc-red">f </span>
          <span className="text-apc-green text-4xl sm:text-6xl md:text-8xl font-extrabold mr-[-10px] sm:mr-[-16px] md:mr-[-22px]">T</span>
          <span className="text-apc-red">he </span>
          <span className="text-apc-green text-4xl sm:text-6xl md:text-8xl font-extrabold">S</span>
          <span className="text-apc-red">outh</span>
        </h1>
        <p
          className="text-sky-500 text-3xl sm:text-4xl md:text-6xl font-bold mb-10 max-w-2xl px-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Yayi's Bond with Ogun State Youth.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/join-volunteer"
            className="bg-apc-green text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors w-56 text-center"
          >
            Join Volunteers
          </Link>
          <button
            onClick={() => setShowThankYou(true)}
            className="bg-white text-black border-2 border-black font-semibold px-8 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-200 w-56 text-center"
          >
            Skip VOTS
          </button>
        </div>
      </div>

      {showThankYou && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
            <p className="text-apc-green text-sm font-semibold tracking-widest uppercase mb-3">
              Thank You
            </p>
            <h3 className="text-2xl font-bold text-black mb-4 font-inter">
              Thanks for visiting VOTS
            </h3>
            <p className="text-gray-600 mb-8">
              Feel free to keep exploring — scroll down to learn more about
              Yayi.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-apc-green text-white font-semibold px-8 py-3 rounded-md hover:bg-apc-green-dark transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;