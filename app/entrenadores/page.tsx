import Link from "next/link";
import Image from "next/image";
import { trainers } from "../data/trainersData";

export default function TrainersPage() {
  return (
    <main className="bg-gray-50 pt-10">
      <section className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Entrenadores Certificados
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Conéctate con profesionales preparados para ayudarte a lograr tus metas
          de salud, fuerza y rendimiento. Tú eliges el entrenador, nosotros te
          facilitamos el camino.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-20">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Image
              src={trainer.image}
              alt={trainer.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {trainer.name}
              </h3>
              <p className="text-gray-600">{trainer.sport}</p>

              <Link href={`/trainers/${trainer.id}`}>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
                  Ver Perfil
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
