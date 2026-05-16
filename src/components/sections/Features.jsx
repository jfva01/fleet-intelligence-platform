import Container from "../ui/Container"
import { Satellite, BarChart3, ShieldCheck } from "lucide-react"

export default function Features() {
  return (
    <section id="Features" className="py-24 bg-gradient-to-r from-slate-100 to-slate-50">
        <Container>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Plataforma Inteligente de Monitoreo GPS
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                    Tecnología diseñada para ofrecer visibilidad total, análisis avanzado 
                    y control operativo en tiempo real desde cualquier dispositivo.
                </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-10">
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                        <Satellite className="w-6 h-6 text-emerald-600"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Monitoreo en Tiempo Real
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Ubicación precisa y actualización constante de cada activo 
                        conectado a la plataforma.
                    </p>
                </div>
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Análisis y Reportes
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Información estratégica para optimizar rutas, reducir costos 
                        y mejorar la eficiencia operativa.
                    </p>
                </div>
                <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-slate-800" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Seguridad Operativa
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Alertas inteligentes, control de eventos y gestión centralizada 
                        desde una infraestructura robusta.
                    </p>
                </div>
            </div>
        </Container>
    </section>
)
}