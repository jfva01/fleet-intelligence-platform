import Container from "../ui/Container"
import Button from "../ui/Button"
import FleetMap from "../maps/FleetMap"

export default function Hero() {
  return (
    <section id="Hero" className="relative py-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl glow-animate"></div>
        <div className="pointer-events-none absolute top-40 right-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-3xl glow-animate"></div>
        <Container className="relative z-10">
            <div className="min-h-[85vh] grid md:grid-cols-2 items-center gap-12">
                {/* TEXTO */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-300">
                        Control Total en Tiempo Real.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl">
                        Plataforma inteligente de monitoreo GPS para empresas que necesitan
                        visibilidad, eficiencia y seguridad operativa en cada movimiento.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button variant="light">
                            Solicitar Demo
                        </Button>

                        <Button variant="secondary">
                            Ver Plataforma
                        </Button>
                    </div>
                    {/* MÉTRICAS */}
                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                        <div>
                            <p className="text-3xl text-gray-200 font-bold">+8.500</p>
                            <p className="text-sm text-gray-400">Dispositivos Activos</p>
                        </div>

                        <div>
                            <p className="text-3xl text-gray-200 font-bold">+320</p>
                            <p className="text-sm text-gray-400">Empresas Conectadas</p>
                        </div>

                        <div>
                            <p className="text-3xl text-gray-200 font-bold">99.9%</p>
                            <p className="text-sm text-gray-400">Disponibilidad</p>
                        </div>
                    </div>
                </div>
                {/* Mockup visual */}
                <div className="hidden md:flex justify-center">
                    <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-[640px] border border-white/10">
                    <FleetMap />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}