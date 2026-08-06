import { useState, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiShare2, FiCheck } from "react-icons/fi";
import school1 from "../assets/project image/school.jpeg";
import school2 from "../assets/project image/school2.jpeg";
import school3 from "../assets/project image/school3.jpeg";
import mw1 from "../assets/project image/Mw1).jpeg";
import mw2 from "../assets/project image/MW2.jpeg";
import mw3 from "../assets/project image/MW3.jpeg";
import farm1 from "../assets/project image/Frm 1.jpeg";
import farm2 from "../assets/project image/frm2.jpeg";
import farm3 from "../assets/project image/frm3.jpeg";

type Project = {
  title: string;
  location: string;
  category: string;
  description: string;
  images?: string[];
  comingSoon?: boolean;
};

const categoryColors: Record<string, string> = {
  Agriculture: "bg-green-100 text-green-700",
  Education: "bg-purple-100 text-purple-700",
  Infrastructure: "bg-orange-100 text-orange-700",
  Empowerment: "bg-pink-100 text-pink-700",
};

function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);

  const projects: Project[] = [
    {
      title: "Farmers Empowerment for Food Security & Poverty Alleviation",
      location: "Ogun State",
      category: "Agriculture",
      description:
        "Another milestone has been achieved in advancing the Renewed Hope Agenda on Agriculture and Food Security. A total of 2,557 farmers across Ogun State were empowered with agricultural equipment, farm inputs, financial support, and a ₦100,000 grant each to boost their farming activities. This is the second edition of the programme, aimed at reducing poverty, improving food security, creating wealth, and encouraging youth participation in agriculture. Empowerment items included 10 tractors with full attachments, 250 haulage tricycles, 1,500 knapsack sprayers, 8,000 NPK & Urea fertilizers, 1,000 solar & gasoline water pumps, 1,000 seed planters, 17 power tillers, 25 different types of seeds & seedlings, 100 organic liquid fertilizers, 1,500 agric enzymes (3X), 2,000 pesticides, and hoes, cutlasses, shovels, wheelbarrows, and other farm tools. The event was attended by Alhaja Kudirat Abiodun Adegunwa-Balogun (APC Deputy Governorship Candidate), Alhaja Salmot Badru (Former Deputy Governor of Ogun State), Chief (Mrs) Temitope Adeola, Rt. Hon. Titi Oseni-Shodunke, Alhaji Mohammed Ekweme (APC Senatorial Chairman, Ogun West), Hon. Sikirulai Ogundele (Former Ogun PDP Chairman), Hon. Jimoh Ojugbele (APC Senatorial Candidate, Ogun West), Seriki Bashorun (APC House of Representatives Candidate, Ado-Odo/Ota Federal Constituency), Hon. Muftau Ajibola, Chief Olu Agemo, Hon. Bisiriyu Popoola, and many other prominent personalities from across Ogun State.",
      images: [farm1, farm2, farm3],
    },
    {
      title: "Scholarships & Bursaries for 5,312 Students",
      location: "Ogun State",
      category: "Education",
      description:
        "Today, I fulfilled yet another promise in the area of educational and human resource development of our youth as I facilitated scholarships and bursaries for 5,312 students of university, polytechnics and colleges of education. Undergraduates of universities received N200,000 each while Polytechnic and Colleges of Education students got N150,000 as scholarships. The bursary amount is N100,000 each. A young artist of less than 10 years old got a scholarship from me for his masterpiece oil on canvas drawing of my portrait. The joyous event had in attendance the Deputy Governor of Ogun State, Engr. Noimot Salako-Oyedele; APC Deputy Governorship Candidate, Alhaja Kudirat Abiodun Adegunwa-Balogun; and my dear wife, Mrs. Temitope Adeola. Former Deputy Governor, Alhaja Salmot Badru; Ogun State APC Chairman, Chief Yemi Sanusi; Ambassador Sarafa Tunji Ishola, Nigeria's former Ambassador to the United Kingdom; Hon. Kayode Oladele, Ogun State Commissioner in the Federal Character Commission; Hon. Laolu Olabimtan, Ogun State Commissioner for Budget and Planning; Hon. Kolawole Moboluwaduro; Chief Derin Adebiyi, former APC State Chairman; Hon. Sikirulai Ogundele, former Ogun State PDP Chairman; Chief Bode Mustapha, the Osi of Egbaland; Hon. Jimoh Ojugbedele, APC Ogun West Senatorial Candidate; and other top government functionaries.",
      images: [school1, school2, school3],
    },
    {
      title: "5th Edition of Market Women & Men Empowerment",
      location: "Ogun State",
      category: "Empowerment",
      description:
        "In fulfillment of my promise to the people, 3,000 market women and men were empowered with a ₦75,000 grant each to support their businesses. Prior to my election, I empowered 5,000 market women with ₦25,000 grants on two occasions, while subsequent editions increased the support to ₦50,000 and now ₦75,000. The initiative supports micro and small businesses and aligns with the Renew Hope Agenda of President Bola Ahmed Tinubu and Governor Dapo Abiodun's \"Oko Owo Dapo\" initiative for market women. The programme was attended by the Deputy Governor of Ogun State, Noimot Salako-Oyedele; Alhaja Salmot Badru, former Deputy Governor; Pastor Tokunbo Talabi, Secretary to the State Government; Rt. Hon. Oludaisi Elemide, Speaker of the Ogun State House of Assembly; Rt. Hon. Titi Oseni-Shodunke; Rt. Hon. Tunji Egbetokun; Alhaja Yemisi Abass, Iyaloja General of Ogun State; Mrs. Yemisi Salako; Hon. Olaolu Olabimtan, Commissioner for Budget and Planning; Hon. Taiwo Oludotun; and other serving and former government officials.",
      images: [mw1, mw2, mw3],
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
              className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
                project.comingSoon ? "" : "cursor-pointer"
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