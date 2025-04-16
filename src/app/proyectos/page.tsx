import Navbar from "../components/navbar";
import ProjectFull from "../components/project-full";
import projects from "../data/projects.json";

export default function Proyectos() {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar></Navbar>
        <h2 className="text-3xl text-center mt-3">Mis proyectos destacados</h2>
        <div className="flex justify-center">
          <div className="flex flex-col divide-y-2 divide-slate-600 w-4/5 bg-slate-800 p-4 m-5 rounded-lg shadow-xl">
            <ProjectFull
              title="FullStack Mangas App"
              description={projects[0].fullDescription}
              images={["/ProyectoManga.png", "/mangas1.png", "/mangas2.png", "/mangas3.png", "/mangas4.png"]}
              technologies={["angular", "bootstrap", "express", "nodejs"]}
            ></ProjectFull>

            <ProjectFull
              title="FullStack Space App"
              description={projects[1].fullDescription}
              images={["/ProyectoSpace.png", "/space4.png", "/space3.png", "/space2.png"]}
              technologies={["nextjs", "tailwind", "express", "nodejs", "mongodb"]}
            ></ProjectFull>
          </div>
        </div>
      </div>
    </>
  );
}
