function Projects() {
  const projects = [
    {
      title: "[Project Title]",
      description:
        "[Short description of what this project achieved and where.]",
    },
    {
      title: "[Project Title]",
      description:
        "[Short description of what this project achieved and where.]",
    },
    {
      title: "[Project Title]",
      description:
        "[Short description of what this project achieved and where.]",
    },
  ];

  return (
    <section id="projects" className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center font-inter">
          Yayi's Projects in Ogun State
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                Project photo here
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
