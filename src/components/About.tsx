import aboutImage from "../assets/Yayiabout.png";

function About() {
  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       <img
          src={aboutImage}
          alt="Yayi"
          className="w-full h-[500px] object-cover object-top rounded-lg shadow-lg"
        />
        <div>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-inter">
            Meet Yayi
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            [Short bio paragraph goes here — background, career, what led him
            into public service.]
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            [Second paragraph — his connection to Ogun State and why he's
            running/serving.]
          </p>
          <p className="text-black font-semibold border-l-4 border-gold pl-4">
            "[One-line mission statement / closing quote]"
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
