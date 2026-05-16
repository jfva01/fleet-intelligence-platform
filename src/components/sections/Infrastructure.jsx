import Container from "../ui/Container"
import { SatelliteDish, Earth, ClockCheck } from "lucide-react"

function Infrastructure() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl glow-animate"></div>
                <div className="pointer-events-none absolute top-40 right-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-3xl glow-animate"></div>
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 tracking-wide">
              Infraestructura confiable para operaciones críticas
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Nuestra plataforma combina dispositivos GPS, conectividad IoT
              y monitoreo en tiempo real para ofrecer visibilidad completa
              de vehículos, maquinaria y personal en terreno.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <SatelliteDish className="w-6 h-6 text-emerald-600"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-slate-200">
                Hardware IoT certificado
              </h3>

              <p className="text-gray-400">
                Dispositivos GPS y sensores instalados en vehículos
                y maquinaria para capturar datos operacionales
                con alta precisión.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Earth className="w-6 h-6 text-blue-600"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-slate-200">
                Cobertura regional
              </h3>

              <p className="text-gray-400">
                Monitoreo continuo en toda Latinoamérica con
                conectividad estable para operaciones logísticas
                y flotas empresariales.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                  <ClockCheck className="w-6 h-6 text-slate-600"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-slate-200">
                Telemetría en tiempo real
              </h3>

              <p className="text-gray-400">
                Accede a métricas operacionales, rutas,
                alertas y reportes directamente desde
                nuestra plataforma web.
              </p>
            </div>

          </div>

          <div className="mt-20 text-center">

            <p className="text-gray-400 mb-2">
              Infraestructura desplegada
            </p>

            <div className="text-4xl font-bold text-blue-600">
              +5,000 dispositivos activos
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Infrastructure;