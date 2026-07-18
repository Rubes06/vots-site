function YayiBond() {
  const plans = [
    {
      title: "For Students",
      description:
        "[Plan details for current students — scholarships, materials, support programs.]",
    },
    {
      title: "For Youth/students Returning to School",
      description:
        "[Plan details for youth who need to go back to school or further their education.]",
    },
    {
      title: "For Unemployed Youth",
      description:
        "[Plan details for skills acquisition, job creation, empowerment programs.]",
    },
  ];

  return (
    <section id="bond" className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          The Promise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center font-inter">
          Yayi's Bond with Ogun State Youth
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          [Short intro paragraph — the overall commitment behind this bond with
          the youth of Ogun State.]
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3 border-l-4 border-gold pl-3">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YayiBond;
