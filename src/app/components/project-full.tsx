import Image from "next/image";
import Carrousel from "./carrousel";

export default function ProjectFull({
  title,
  description,
  images,
  technologies,
}: {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
}) {
  return (
    <>
      <div className="py-3">
        <div className="">
          <h3 className="text-2xl text-center">{title}</h3>
          <div className="mt-5 md:flex flex-row">
            <div className="md:w-2/5">
              <Carrousel images={images}></Carrousel>
              <div className="flex flex-row items-center justify-center mt-2 mb-3 space-x-3">
                {technologies.map((tech, index) => {
                  return (
                    <div key={index} className="w-10 h-10 relative">
                      <Image
                        src={`/${tech}.svg`}
                        alt={`${tech}-logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="md:ms-5 md:px-5 md:w-3/5">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
