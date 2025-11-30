import Link from "next/link";
import Image from "next/image";
import { sportsData } from "../data/sportsData";

export default function Sports() {
  return (
    <main className="bg-gray-50 pt-10">
      <section className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Explora los Deportes Disponibles
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Elige entre múltiples disciplinas diseñadas para mejorar tu salud,
          condición física y rendimiento. Cada deporte tiene entrenadores
          especializados listos para ayudarte a comenzar.
        </p>

        <Link href="/trainers">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow">
            Ver Entrenadores
          </button>
        </Link>
      </section>

      {/* SPORTS LIST */}
      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-20">
        {sportsData.map((sport) => (
          <div key={sport.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
            <Image
              src={sport.image}
              alt={sport.name}
              width={400}
              height={250}
              className="object-cover h-48 w-full"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-900">
                {sport.name}
              </h3>
              <Link href={`/trainers`}>
                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm shadow">
                  Ver Entrenadores
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} FitConnect — Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
