import Link from "next/link";

export default function BenefitsPage() {
  return (
    <main className="bg-white pt-10">
      <section className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          ¿Por qué Entrenar con FitConnect?
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Porque no solo entrenas: transformas tu cuerpo, tu energía y tu estilo
          de vida con la guía de expertos certificados. Tú pones la meta, y
          nosotros te conectamos con el entrenador ideal.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 mb-16">
        <div className="bg-gray-50 rounded-2xl p-8 shadow hover:-translate-y-1 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Entrenamiento Personalizado
          </h3>
          <p className="text-center text-gray-600 mt-3">
            Planes diseñados exclusivamente para tus objetivos: pérdida de peso,
            tonificación, deporte específico o salud.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow hover:-translate-y-1 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Entrenadores Certificados
          </h3>
          <p className="text-center text-gray-600 mt-3">
            Profesionales con experiencia real en entrenamiento físico, deporte,
            salud y alto rendimiento.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow hover:-translate-y-1 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Horarios Flexibles
          </h3>
          <p className="text-center text-gray-600 mt-3">
            Agenda tus sesiones según tu vida, no al revés. Entrena desde casa,
            gimnasio o parque.
          </p>
        </div>
      </section>

      <div className="text-center mb-20">
        <Link href="/trainers">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full font-semibold shadow-xl">
            Conoce a los Entrenadores
          </button>
        </Link>
      </div>

      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} FitConnect — Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
