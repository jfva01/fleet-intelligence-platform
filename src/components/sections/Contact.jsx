import Container from "../ui/Container"
import Button from "../ui/Button"

export default function Contact() {
  return (
    <section id="Contact" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <Container>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">
                    ¿Listo para Optimizar tu Operación?
                </h2>

                <p className="mt-6 text-lg text-white/90">
                    Descubre cómo nuestra plataforma puede transformar
                    la gestión de tu flota y activos críticos.
                </p>
                <div className="mt-10 flex justify-center gap-6">
                    <Button variant="light">
                        Solicitar Demo
                    </Button>

                    <Button variant="secondary">
                        Contactar Equipo
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}