function Support() {
  return (
    <section
      id="support"
      className="relative w-full bg-black text-white py-24 px-6 md:px-16 text-center overflow-hidden"
    >
      {/* subtle gold glow backdrop for a "closing" feel */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        <p className="text-gold text-base md:text-lg font-extrabold tracking-[0.2em] uppercase mb-3">
          Join The Movement
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-inter leading-tight">
          Support <span className="text-gold">Yayi</span>
        </h2>

        {/* divider */}
        <div className="w-16 h-[3px] bg-gold mx-auto mb-8" />

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          <span className="text-gold font-extrabold text-xl">
            Yayi's Bonds
          </span>{" "}
          — a promise to build a more{" "}
          <span className="text-white font-bold">prosperous</span>,{" "}
          <span className="text-white font-bold">digital</span>,{" "}
          <span className="text-white font-bold">educated</span>, and{" "}
          <span className="text-white font-bold">youth-focused</span> Ogun
          State. Join us in standing with Yayi to bring this vision to life
          for every person across the state.
        </p>

        <a
          href="/join-volunteer"
          className="inline-block bg-gold text-black font-semibold px-8 py-3 rounded-md hover:bg-gold-light hover:scale-105 transition-all duration-200 shadow-lg shadow-gold/20"
        >
          Join Volunteers
        </a>
      </div>
    </section>
  );
}

export default Support;