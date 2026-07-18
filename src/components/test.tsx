import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Yayi.png";

function Hero() {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Yayi"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-gold text-lg md:text-xl font-semibold tracking-widest uppercase mb-3">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 font-inter">
          <span className="text-apc-blue">V</span>
          <span className="text-black">olunteers </span>
          <span className="text-apc-blue">o</span>
          <span className="text-black">f </span>
          <span className="text-apc-blue">t</span>
          <span className="text-black">he </span>
          <span className="text-apc-blue">S</span>
          <span className="text-black">outh</span>
        </h1>
        <p className="text-apc-red text-3xl md:text-5xl font-extrabold mb-4 font-inter tracking-widest">
          VOTS //green,red green welcom eto vots gone then the mouth,eye should show 
        </p>
        <p className="text-gold text-lg md:text-xl mb-10 max-w-xl">
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
            className="bg-white text-black border border-white font-semibold px-8 py-3 rounded-md hover:bg-apc-green hover:text-black transition-colors w-56 text-center"
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