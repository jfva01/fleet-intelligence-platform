import Container from "../ui/Container"
import { SquareChartGantt, Tractor, ClipboardCheck } from "lucide-react"

export default function Modules() {
  return (
    <section id="Modules" className="py-24 bg-gradient-to-r from-slate-100 to-slate-50">
        <Container>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Módulos de la Plataforma
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                    Arquitectura modular diseñada para adaptarse a distintos entornos
                    industriales y necesidades empresariales.
                </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-10">
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                        <SquareChartGantt className="w-6 h-6 text-emerald-600"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Gestión de Flotas
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Control completo de vehículos, historial de rutas,
                        consumo y comportamiento de conducción.
                    </p>
                </div>
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                        <Tractor className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Activos y Maquinaria
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Monitoreo de maquinaria pesada y activos críticos
                        con alertas automatizadas de sensores.
                    </p>
                </div>
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                        <ClipboardCheck className="w-6 h-6 text-slate-600"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Inteligencia Operativa
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Análisis avanzado de datos para optimización
                        estratégica y reducción de costos.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}