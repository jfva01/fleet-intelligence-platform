import Container from "../ui/Container";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <Container>
                <div className="py-16 grid md:grid-cols-4 gap-12">
                    {/* Marca */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Vital<span className="text-emerald-500">Latam</span>
                        </h3>
                        <p className="mt-4 text-sm text-slate-400">
                            Plataforma tecnológica de monitoreo GPS y gestión
                            inteligente de flotas y activos empresariales.
                        </p>
                    </div>
                    {/* Navegación */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                        Navegación
                        </h4>
                        <ul className="space-y-3 text-sm">
                        <li><Link to="/" className="hover:text-white">Inicio</Link></li>
                        <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link to="/terms" className="hover:text-white">Términos</Link></li>
                        </ul>
                    </div>
                    {/* Plataforma */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                        Plataforma
                        </h4>
                        <ul className="space-y-3 text-sm">
                        <li>Monitoreo en Tiempo Real</li>
                        <li>Gestión de Flotas</li>
                        <li>Reportes y Analítica</li>
                        <li>Alertas Inteligentes</li>
                        </ul>
                    </div>
                    {/* Contacto */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                        Contacto
                        </h4>
                        <ul className="space-y-3 text-sm">
                        <li>info@vitallatam.com</li>
                        <li>+56 9 0000 0000</li>
                        <li>Santiago, Chile</li>
                        </ul>
                    </div>
                </div>
                {/* Línea inferior */}
                <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} VitalLatam. Todos los derechos reservados.
                </div>
            </Container>
        </footer>
    )
}

export default Footer