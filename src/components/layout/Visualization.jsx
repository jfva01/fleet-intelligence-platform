import Container from "../ui/Container"
import TrackingInterface from "../../assets/images/interfaz-de-rastreo.png"

export default function Visualization() {
  return (
    <section id="Visualization" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Visualización Centralizada
                    </h2>

                    <p className="mt-6 text-lg text-slate-300">
                        Panel de control con mapa interactivo, monitoreo de activos,
                        métricas en tiempo real y alertas inteligentes.
                    </p>

                    <ul className="mt-8 space-y-4 text-slate-300">
                        <li>• Vista satelital en tiempo real</li>
                        <li>• Estado de dispositivos conectados</li>
                        <li>• Eventos y notificaciones instantáneas</li>
                        <li>• Reportes descargables</li>
                    </ul>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                    <img
                        src={TrackingInterface}
                        alt="Fleet monitoring dashboard"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Container>
    </section>
  )
}