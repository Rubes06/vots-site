import { useState, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiShare2, FiCheck } from "react-icons/fi";
import healthCentreExterior from "../assets/project image/WhatsApp Image 2026-07-28 at 3.54.09 PM (3).jpeg";
import healthCentreEntrance from "../assets/project image/WhatsApp Image 2026-07-28 at 3.54.09 PM (2).jpeg";
import school1 from "../assets/project image/school.jpeg";
import school2 from "../assets/project image/school2.jpeg";
import school3 from "../assets/project image/school3.jpeg";
import water1 from "../assets/project image/Water.jpeg";
import water2 from "../assets/project image/water2.jpeg";

type Project = {
  title: string;
  location: string;
  category: string;
  // date: string;
  description: string;
  images?: string[];
  comingSoon?: boolean;
};

const categoryColors: Record<string, string> = {
  Health: "bg-blue-100 text-blue-700",
  Education: "bg-purple-100 text-purple-700",
  Infrastructure: "bg-orange-100 text-orange-700",
};

function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);

  const projects: Project[] = [
    {
      title: "Primary Health Care Centre",
      location: "State Hospital, Ilaro — Yewa South LGA",
      category: "Health",
      // date: "July 2026",
      description:
        "A newly constructed and commissioned Primary Health Care Centre delivering affordable, accessible healthcare closer to home. Part of the Renewed Hope Agenda, this facility ensures residents of Yewa South can access quality health services within their own locality — because health is wealth.",
      images: [healthCentreExterior, healthCentreEntrance],
    },
    {
      title: "Scholarships & Bursaries for 5,312 Students",
      location: "Ogun State",
      category: "Education",
      // date: "July 2026",
      description:
        "Today, I fulfilled yet another promise in the area of educational and human resource development of our youth as I facilitated scholarships and bursaries for 5,312 students of university, polytechnics and colleges of education. Undergraduates of universities received N200,000 each while Polytechnic and Colleges of Education students got N150,000 as scholarships. The bursary amount is N100,000 each. A young artist of less than 10 years old got a scholarship from me for his masterpiece oil on canvas drawing of my portrait. The joyous event had in attendance the Deputy Governor of Ogun State, Engr. Noimot Salako-Oyedele; APC Deputy Governorship Candidate, Alhaja Kudirat Abiodun Adegunwa-Balogun; and my dear wife, Mrs. Temitope Adeola. Former Deputy Governor, Alhaja Salmot Badru; Ogun State APC Chairman, Chief Yemi Sanusi; Ambassador Sarafa Tunji Ishola, Nigeria's former Ambassador to the United Kingdom; Hon. Kayode Oladele, Ogun State Commissioner in the Federal Character Commission; Hon. Laolu Olabimtan, Ogun State Commissioner for Budget and Planning; Hon. Kolawole Moboluwaduro; Chief Derin Adebiyi, former APC State Chairman; Hon. Sikirulai Ogundele, former Ogun State PDP Chairman; Chief Bode Mustapha, the Osi of Egbaland; Hon. Jimoh Ojugbedele, APC Ogun West Senatorial Candidate; and other top government functionaries.",
      images: [school1, school2, school3],
    },
    {
      title: "Promise Made, Promise Kept — Electricity Restoration",
      location: "Ogun Waterside LGA",
      category: "Infrastructure",
      // date: "July 2026",
      description:
        "Two weeks ago I made a promise to stakeholders from Ogun Waterside LGA and environs for restoration of electricity. Today that promise is being fulfilled with the flag-off of the project that will restore light to over 50 communities that had been thrown into darkness for over 10 years. The flag-off took place during a well-attended town hall meeting in Abigi. I was accompanied to the event that witnessed massive crowds of appreciative indigenes by the APC Deputy Governorship Candidate, Mrs. Kudirat Abiodun Adegunwa-Balogun. Dignitaries in attendance included Prince Segun Adesegun, former Deputy Governor of Ogun State; Senator Lekan Mustapha; Hon. Abiodun Abudu-Balogun; Professor Awonusi; Hon. Babatunde Adejare; Alhaji Olatunde Rufai; the member representing Ogun Waterside State Constituency in the Ogun State House of Assembly, Hon. Samsudeen Lawal; the Special Adviser to the Governor on Water Resources, Hon. Damilola Otubanjo; former Executive Chairman of Ogun Waterside Local Government, Hon. Lateef Adekunle Mudashiru; the Executive Chairman of Ogun Waterside Local Government, Hon. Odunnake Ganiu; Senior Special Assistants to the Governor; representatives of the Christian Association of Nigeria (CAN); APC leaders from Oni, Etike, Abigi, Ilusin/Lukogbe and Ibiade Wards; party leaders from Ogun Waterside and Ijebu East; traditional rulers; religious leaders; and other stakeholders. #Ogun2027 #unprecedentedrepresentation",
      images: [water1, water2],
    },
  ];

  const openGallery = (projectIndex: number) => {
    if (projects[projectIndex].comingSoon) return;
    setActiveProject(projectIndex);
    setActiveImage(0);
    setCopied(false);
  };

  const closeGallery = useCallback(() => {
    setActiveProject(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveProject((current) => current);
    setActiveImage((prev) => {
      if (activeProject === null) return prev;
      const images = projects[activeProject].images || [];
      return (prev + 1) % images.length;
    });
  }, [activeProject, projects]);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => {
      if (activeProject === null) return prev;
      const images = projects[activeProject].images || [];
      return (prev - 1 + images.length) % images.length;
    });
  }, [activeProject, projects]);

  useEffect(() => {
    if (activeProject === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, closeGallery, nextImage, prevImage]);

  const handleShare = async (project: Project) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#projects`;
    const shareText = `${project.title} — ${project.location}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: project.title, text: shareText, url: shareUrl });
      } catch {
        // user cancelled share — no action needed
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentProject = activeProject !== null ? projects[activeProject] : null;
  const currentImages = currentProject?.images || [];

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
              onClick={() => openGallery(index)}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${project.comingSoon ? "" : "cursor-pointer"
                }`}
            >
              {project.comingSoon ? (
                <div className="w-full h-52 bg-gray-100 border-b-4 border-green-700 flex items-center justify-center text-gray-400 text-sm">
                  Coming soon
                </div>
              ) : (
                <div className="relative w-full h-52 overflow-hidden border-b-4 border-green-700 group bg-gray-900">
                  <img
                    src={project.images?.[0]}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      +{project.images.length - 1} more
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold transition-opacity">
                      View Gallery
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {!project.comingSoon && (
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] || "bg-gray-100 text-gray-600"}`}>
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">
                      {/* {project.date} */}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-black mb-1">
                  {project.title}
                </h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-3">
                  {project.location}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4">
                  {project.description}
                </p>
                {!project.comingSoon && project.description.length > 220 && (
                  <span className="text-green-700 text-xs font-semibold mt-2">
                    Read more →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center px-4 pt-20 pb-8 overflow-y-auto"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-[60]"
          >
            <FiX size={32} />
          </button>

          <div
            className="relative w-full max-w-3xl flex items-center justify-center flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-0 md:-left-16 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FiChevronLeft size={40} />
              </button>
            )}

            <img
              src={currentImages[activeImage]}
              alt={currentProject.title}
              className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg mx-auto"
            />

            {currentImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-0 md:-right-16 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FiChevronRight size={40} />
              </button>
            )}
          </div>

          <div
            className="mt-6 text-center px-4 max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[currentProject.category] || "bg-gray-100 text-gray-600"}`}>
                {currentProject.category}
              </span>
              <span className="text-gray-400 text-xs font-medium">
                {/* {currentProject.date} */}
              </span>
            </div>
            <h3 className="text-white text-lg font-bold">{currentProject.title}</h3>
            <p className="text-gold text-sm font-semibold uppercase tracking-wide mt-1">
              {currentProject.location}
            </p>
            {currentImages.length > 1 && (
              <p className="text-gray-400 text-xs mt-2">
                {activeImage + 1} / {currentImages.length}
              </p>
            )}
            <p className="text-gray-300 text-sm leading-relaxed mt-4 text-left">
              {currentProject.description}
            </p>

            <button
              onClick={() => handleShare(currentProject)}
              className="mt-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              {copied ? (
                <>
                  <FiCheck size={16} />
                  Link Copied
                </>
              ) : (
                <>
                  <FiShare2 size={16} />
                  Share
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;