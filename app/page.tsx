import Image from "next/image";
import Link from "next/link";
import { sportsData } from "./data/sportsData";
import { trainers } from "./data/trainersData";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* BANNER */}
      <section className="relative h-[75vh] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
          alt="Banner"
          fill
          className="object-cover opacity-60"
        />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Transforma tu cuerpo con los mejores entrenadores
          </h1>
          <p className="mt-4 text-lg md:text-2xl opacity-90">
            Encuentra especialistas certificados y entrena en la disciplina que más te motive.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link href="/entrenadores">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg">
                Buscar Entrenadores
              </button>
            </Link>

            <Link href="/deportes">
              <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg">
                Ver Deportes
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          ¿Por qué elegir FitConnect?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Entrenadores verificados
            </h3>
            <p className="text-center text-gray-600 mt-3">
              Todos los profesionales cuentan con certificaciones comprobables.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Horarios flexibles
            </h3>
            <p className="text-center text-gray-600 mt-3">
              Agenda sesiones según tu tiempo, ritmo y disponibilidad.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Múltiples disciplinas
            </h3>
            <p className="text-center text-gray-600 mt-3">
              Desde fuerza y cardio hasta deportes especializados.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/beneficios">
            <button className="bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-full text-lg font-semibold text-white shadow transition">
              Explorar Beneficios
            </button>
          </Link>
        </div>
      </section>

      {/* SPORTS */}
      <section className="py-16 bg-white px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Deportes disponibles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {sportsData.map((sport) => (
            <Link key={sport.id} href={`/sports/${sport.id}`}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition cursor-pointer">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  width={400}
                  height={260}
                  className="object-cover h-48 w-full"
                />
                <div className="text-center py-4 text-gray-800 font-semibold text-lg">
                  {sport.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/deportes">
            <button className="bg-black hover:bg-gray-900 px-10 py-3 rounded-full text-lg font-semibold text-white shadow transition">
              Ver todos los deportes
            </button>
          </Link>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Entrenadores destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <Link key={trainer.id} href={`/trainers/${trainer.id}`}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition cursor-pointer">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={400}
                  height={340}
                  className="object-cover h-56 w-full"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
                  <p className="text-gray-600">{trainer.sport}</p>

                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
                    Ver perfil
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/entrenadores">
            <button className="bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-full text-lg font-semibold text-white shadow transition">
              Ver todos los entrenadores
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} FitConnect — Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
