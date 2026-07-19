import aboutImage from "../assets/Yayi carousel/Vots image.jpg";

function About() {
  const focusAreas = [
    "Community Development Association (CDA) visits.",
    "Youth association engagements.",
    "Town hall conversations.",
    "To Highlight Yayi's Commitments to Ogun Youth.",
    "Digital media campaigns.",
    "Civic education targeted at first-time and young voters.",
  ];

  const VotsHighlight = () => (
    <span className="text-2xl font-extrabold">
      <span className="text-apc-red">101</span>{" "}
      <span className="text-apc-green">V.O.T.S.</span>
    </span>
  );

  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src={aboutImage}
          alt="101 V.O.T.S."
          className="w-full h-[500px] object-cover object-top rounded-lg shadow-lg"
        />
        <div>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">
            <span className="text-black">About </span>
            <span className="text-apc-green">VOTS</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <VotsHighlight /> <span className="text-lg">(</span>
            <span className="text-apc-red font-bold text-lg">101</span>{" "}
            <span className="text-apc-green font-bold text-lg">V</span>
            <span className="text-apc-red font-bold text-lg">OLUNTEERS </span>
            <span className="text-apc-green font-bold text-lg">O</span>
            <span className="text-apc-red font-bold text-lg">F </span>
            <span className="text-apc-green font-bold text-lg">T</span>
            <span className="text-apc-red font-bold text-lg">HE </span>
            <span className="text-apc-green font-bold text-lg">S</span>
            <span className="text-apc-red font-bold text-lg">OUTH</span>
            <span className="text-lg">)</span> is a strategic grassroots volunteer initiative conceived by{" "}
            <span className="text-black font-bold">Femi Sokeye</span> to
            complement existing campaign structures in support of the
            aspiration of{" "}
            <span className="text-black font-bold">
              Senator Olamilekan Adeola (YAYI)
            </span>{" "}
            in the 2027 Ogun State Governorship election.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The movement is designed to mobilize credible citizens,
            particularly young people, to encourage civic engagement and
            community participation across Abeokuta South Local Government
            and, ultimately, the entire state.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <div>
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To build a vibrant network of committed volunteers who will
            promote constructive civic engagement and encourage informed
            participation in the democratic process through community
            outreach and digital engagement.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            The 101 Concept
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The initiative will comprise 101 members:
          </p>
          <ul className="flex flex-col gap-2 mb-4">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              100 volunteers drawn from across Abeokuta South Local
              Government Area
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              The 101st member will be Femi Sokeye, who will provide
              coordination and leadership for the initiative.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            The project is intentionally limited to 101 members to ensure
            effective coordination, accountability, measurable impact, and
            close management of campaign activities.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            Focus and Strategy
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            <VotsHighlight /> seeks to engage communities through:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-4">
            {focusAreas.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 bg-gray-50 rounded-lg px-4 py-3"
              >
                <span className="text-apc-red font-bold mt-0.5">-</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            A major objective is to connect with Generation Z, many of whom
            are participating in the electoral process for the first time.
            Through issue-based conversations, historical context, and
            community engagement, the initiative aims to encourage informed
            decision-making and active citizenship.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            Digital Platform
          </h3>
          <p className="text-gray-600 leading-relaxed mb-2">
            Membership registration will be conducted through:{" "}
            <a href="https://www.vots.ng" className="text-apc-green font-semibold text-lg hover:underline">
              www.vots.ng
            </a>
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Membership is strictly limited to 101 volunteers from Abeokuta
            South LGA.
          </p>
          <p className="text-black font-semibold border-l-4 border-gold pl-4 italic mb-6">
            The initiative welcomes volunteers from diverse backgrounds who
            share a common vision for the future of Ogun State and wish to
            contribute actively to the campaign of Yayi.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            After registration closes, the website will remain active as a
            public platform where visitors can:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              Watch campaign and outreach videos.
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              Follow project activities.
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              Share comments and constructive suggestions.
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-apc-red font-bold mt-1">-</span>
              Engage with the movement online.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            Why Only 101 Members?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The All Progressives Congress (APC) already possesses extensive
            campaign structures across various levels.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <VotsHighlight /> is not intended to duplicate those structures
            but to serve as a focused complementary volunteer initiative with
            clearly defined objectives, measurable outcomes, and efficient
            coordination.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By maintaining a lean membership, every volunteer becomes
            visible, accountable, and impactful.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-apc-green mb-4 font-inter">
            Guiding Philosophy
          </h3>
          <p className="text-black text-lg italic font-medium">
            Success is the sum of small efforts, repeated day-in and
            day-out.
          </p>
          <p className="text-gray-500 text-sm mt-2">- Robert Collier</p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-apc-green mb-4 font-inter">
            Conclusion
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            <VotsHighlight /> is built on the belief that committed citizens
            can positively influence democratic participation through
            peaceful grassroots engagement, constructive dialogue, and
            community service.
          </p>
          <p className="text-apc-red text-2xl font-extrabold tracking-wide mb-2">
            Victoria Ascerta!
          </p>
          <p className="text-black font-semibold">- Femi Sokeye</p>
        </div>
      </div>
    </section>
  );
}

export default About;