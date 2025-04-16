import AboutMeCard from "./components/about-me-card";
import Navbar from "./components/navbar";
import ProjectCard from "./components/project-card";
import Technologies from "./components/technologies";
import dataTechnologies from "./data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-950 to-black-900 lg:h-screen">
        <Navbar />
        <div className="">
          <div className="md:flex flex-row">
            <div className="basis-1/4 p-4">
              <AboutMeCard />
              <div className="flex justify-center mt-4">
                <a
                  href="/CV.pdf"
                  download
                  className="rounded-xl p-4 relative bg-gradient-to-r from-pink-600 to-pink-800 cursor-pointer hover:outline hover:outline-offset-4 hover:outline-violet-800 hover:outline-double hover:scale-105"
                >
                  Descargar CV
                </a>
              </div>
              <div className="flex justify-center space-x-10 mt-10">
                <Link
                  className="hover:scale-110 hover:outline hover:outline-double hover:outline-offset-4 hover:outline-violet-800 rounded-xl"
                  href="https://www.github.com/pedrosky21"
                  target="_blank"
                >
                  <Image
                    src="/github.svg"
                    alt="github"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  className="hover:scale-110 hover:outline hover:outline-double hover:outline-offset-4 hover:outline-violet-800 rounded-xl"
                  href="https://www.instagram.com/pedro.sky21"
                  target="_blank"
                >
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className="basis-3/4 p-4">
              <h2 className="text-3xl text-white mb-2">Proyectos destacados</h2>
              <div className="bg-gray-800 mt-2 p-4 rounded-lg">
                <ul className="divide-y divide-slate-200">
                  {dataTechnologies.map((project) => (
                    <li className="py-2" key={project.id}>
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-row p-3.5">
          <div className="">
            <Technologies />
          </div>
        </div>
      </div>
    </>
  );
}
