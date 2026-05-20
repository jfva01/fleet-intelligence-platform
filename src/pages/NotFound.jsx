import Container from "../components/ui/Container"

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        {/* Branding */}
        <div className="flex justify-center mb-8">
          <img src="/images/logo-vital-latam.webp" alt="Vital Latam" className="h-14 w-auto" loading="eager" />
        </div>

        {/* 404 */}
        <p className="text-blue-400 font-semibold tracking-widest uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          Página no encontrada
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto">
          La ruta que intentas visitar no existe o fue movida.
          Puedes volver al inicio y continuar explorando la plataforma.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="px-6 py-3 rounded-lg font-semibold transition bg-white text-blue-700 hover:bg-slate-200">
                Volver al inicio
            </Link>

            <a href="#contact" className="px-6 py-3 rounded-lg font-semibold transition border border-white text-slate-400 hover:bg-slate-200 hover:border-slate-200 hover:text-blue-700">
                Contactar soporte
            </a>
        </div>

        {/* Ilustración */}
        <div className="mt-16 flex justify-center">
          <div className=" relative w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}