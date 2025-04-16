import Image from "next/image";

export default function AboutMeCard() {
  return (
    <>
      <div className="container bg-gradient-to-b from-fuchsia-950 to-slato-900 p-4 rounded-lg text-sm text-white">
        <Image
          src="/yo3.jpeg"
          alt="foto mia"
          width={100}
          height={100}
          className="rounded-full float-left mr-3 mb-2"
        />
        <p className="text-2xl">Pedro Arreguez</p>
        <p>Estudiante de Ingeniería en Sistemas en la UTN (4to año).</p>
        <p className="mt-2">Córdoba, Argentina</p>
        <p>23 años</p>
      </div>
      <div className="flex space-x-2 ps-4 text-sm items-center">
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
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p>pedroarreguez21@gmail.com</p>
      </div>
    </>
  );
}
