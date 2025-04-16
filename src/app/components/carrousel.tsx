"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carrousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    setCurrentIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
  };

  return (
    <>
      <div className="flex">
        <div className="relative w-full h-40 lg:h-64">
          <div className="relative w-full h-40 lg:h-64 justify-center items-center">
            <Image
              src={images[currentIndex]}
              alt={images[currentIndex]}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-0 flex flex-row justify-between items-center w-full">
            <button
              onClick={handlePrev}
              className="mx-2 p-2 bg-slate-800 rounded-full shadow-lg hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="mx-2 p-2 bg-slate-800 rounded-full shadow-lg hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
