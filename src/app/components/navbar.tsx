"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPage: string = usePathname();

  const getLinkClassName = (page: string) => {
    let className = "rounded-md p-2 hover:outline outline-1 outline-fuchsia-900 active:text-fuchsia-900";
    
    if (currentPage === page) {
      className += " text-fuchsia-900 outline";
    }
    return className;
  }

  return (
    <>
      <nav className="flex justify-center text-white font-kanit font-semibold">
        <div className="flex justify-center items-center space-x-4 my-2 p-2 outline outline-1 outline-gray-600 rounded-lg md:w-full md:max-w-6xl sm:w-80">
          <Link
            href="/"
            className={getLinkClassName("/")}
          >
            Inicio
          </Link>
          <Link
            href="/proyectos"
            className={getLinkClassName("/proyectos")}
          >
            Proyectos
          </Link>
          <Link
            href="/sobre-mi"
            className={getLinkClassName("/sobre-mi")}
          >
            Sobre mí
          </Link>
        </div>
      </nav>
    </>
  );
}
