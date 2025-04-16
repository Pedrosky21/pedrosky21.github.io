"use client";
import Image from "next/image";
import dataTechnologies from "../../data/technologies.json";
import { useState } from "react";

export default function MyTechnologies() {
  const [showedTechnology, setShowedTechnology] = useState<{
    title: string;
    description: string[];
  }>(dataTechnologies[0]);

  const technologies = [
    "python",
    "javascript",
    "nextjs",
    "angular",
    "nodejs",
    "github",
    "mysql",
    "mongodb",
  ];

  const showTechnology = (tech: string) => {
    const technology = dataTechnologies?.find((elem) => {
      if (elem.title.toLowerCase() === tech) {
        return elem;
      }
      if (tech === "nextjs" && elem.title.toLowerCase() === "next.js") {
        return elem;
      }
      if (tech === "nodejs" && elem.title.toLowerCase() === "node.js") {
        return elem;
      }
    });
    setShowedTechnology(technology ? technology : dataTechnologies[0]);
  };

  const colorTechnology = (tech: string) => {
    let className = "text-xl ";
    let color;
    switch (tech) {
      case "python":
        color = "text-green-500";
        break;
      case "javascript":
        color = "text-yellow-300";
        break;
      case "next.js":
        color = "text-white";
        break;
      case "angular":
        color = "text-red-600";
        break;
      case "node.js":
        color = "text-green-500";
        break;
      case "github":
        color = "text-gray-400";
        break;
      case "mysql":
        color = "text-blue-700";
        break;
      case "mongodb":
        color = "text-green-700";
        break;
      default:
        color = "text-white";
    }

    className += color;
    return className;
  };

  return (
    <>
      <div className="bg-slate-800 p-4 rounded-xl shadow-xl shadow-slate-900 w-full">
        <h2 className="text-xl text-end me-10">Habilidades técnicas</h2>
        <div className="flex space-x-4">
          <div className="space-y-4">
            {technologies.map((tech) => (
              <button
                key={tech}
                className={`flex flex-col outline outline-1 outline-black rounded-xl p-2 hover:outline-violet-900 hover:scale-125
                  ${
                    showedTechnology.title.toLowerCase() === tech ||
                    (tech === "nextjs" && showedTechnology.title.toLowerCase() === "next.js") ||
                    (tech === "nodejs" && showedTechnology.title.toLowerCase() === "node.js")
                      ? "outline-violet-900"
                      : ""
                  }
                  `}
                onClick={() => {
                  showTechnology(tech);
                }}
              >
                <Image
                  src={`./${tech}.svg`}
                  alt={`${tech}-logo`}
                  width={40}
                  height={40}
                ></Image>
              </button>
            ))}
          </div>
          <div className="p-5 pt-2 bg-slate-900 w-full rounded-xl">
            <h2
              className={colorTechnology(showedTechnology.title.toLowerCase())}
            >
              {showedTechnology.title}
            </h2>
            <ul className="mt-2 space-y-2">
              {showedTechnology.description.map(
                (item: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 text-green-500 hidden md:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
