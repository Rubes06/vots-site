import {
  TrendingUp,
  Cpu,
  GraduationCap,
  Trophy,
} from "lucide-react";

function YayiBond() {
  const plans = [
    {
      number: "01",
      icon: TrendingUp,
      title: "Rapid Employment Generation Through Accelerated Foreign Direct Investment (FDI)",
      description:
        "A commitment to aggressively attract and facilitate Foreign Direct Investment into Ogun State, creating sustainable employment opportunities and expanding economic growth across the state.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Digital Education and Technology-Driven Entrepreneurship",
      description:
        "A commitment to promoting digital education, equipping young people with relevant technology skills, and creating an enabling environment for tech-driven entrepreneurship and innovation.",
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Restoring Ogun State's Scholarly Excellence Through Quality Basic Education",
      description:
        "A commitment to strengthening basic education by improving learning standards, supporting teachers, and ensuring Ogun State regains its historic position as one of Nigeria's foremost centres of academic excellence.",
    },
    {
      number: "04",
      icon: Trophy,
      title: "Sports as an Economic Engine and Tool for Youth Development",
      description:
        "A commitment to massive investment in sports infrastructure, talent development, and sporting opportunities, using sports as a powerful tool to reduce youth restiveness, create economic opportunities, and position Ogun State prominently on the global sports map.",
    },
  ];

  return (
    <section
      id="bond"
      className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* faint gold accent shape */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-gold text-xs font-extrabold tracking-[0.2em] uppercase mb-3 text-center">
          The Promise
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 text-center font-inter">
          Yayi's Bond with Ogun State Youth
        </h2>

        <div className="w-16 h-[3px] bg-gold mx-auto mb-6" />

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg">
          Four commitments. One vision for the future of Ogun State's youth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2"
              >
                {/* number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-extrabold text-gray-200 group-hover:text-gold/20 transition-colors">
                  {plan.number}
                </span>

                {/* icon badge - stays same colour, no hover flip */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-black mb-3 leading-snug">
                  {plan.title}
                </h3>

                <p className="relative z-10 text-gray-600 text-base leading-relaxed">
                  {plan.description}
                </p>

                {/* bottom accent line that grows on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gold rounded-b-2xl w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YayiBond;