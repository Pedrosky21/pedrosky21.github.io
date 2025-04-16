import Image from "next/image";

export default function MyCard() {
  return (
    <>
      <div className="bg-slate-800 p-4 rounded-xl shadow-xl shadow-slate-900">
        <div className="xl:flex items-center">
          <Image
            className="rounded-xl"
            src="/yo7.png"
            alt="yo2"
            width={250}
            height={250}
          ></Image>
          <div className="ms-2">
            <h2 className="text-xl mb-2 mt-2 lg:mt-0">
              ¡Hola! Soy{" "}
              <span className="ms-1 relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-800">
                <span className="relative text-white">Pedro</span>
              </span>
            </h2>
            <p>
              Me encanta la programación, soy alguien proactivo con muchas ganas
              de aprender y crecer en el ámbito profesional.
            </p>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Desarrollador de software</p>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Estudiante de 4to año de Ingeniería en Sistemas</p>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>Córdoba, Argentina</p>
          </div>
        </div>
      </div>
    </>
  );
}
