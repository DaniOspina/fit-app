"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FitConnect</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`hover:underline ${
                pathname === "/" ? "font-bold underline" : ""
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/entrenadores"
              className={`hover:underline ${
                pathname === "/entrenadores" ? "font-bold underline" : ""
              }`}
            >
              Entrenadores
            </Link>
          </li>
          <li>
            <Link
              href="/deportes"
              className={`hover:underline ${
                pathname === "/deportes" ? "font-bold underline" : ""
              }`}
            >
              Deportes
            </Link>
          </li>
          <li>
            <Link
              href="/agendar"
              className={`hover:underline ${
                pathname === "/agendar" ? "font-bold underline" : ""
              }`}
            >
              Agendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
