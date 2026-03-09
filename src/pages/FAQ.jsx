import { useState } from "react"
import Container from "../components/ui/Container"

const faqs = [
  {
    question: "¿Cómo funciona la plataforma de monitoreo?",
    answer:
      "Nuestra plataforma se conecta a dispositivos GPS instalados en vehículos o activos, transmitiendo información en tiempo real hacia un panel centralizado accesible desde cualquier dispositivo.",
  },
  {
    question: "¿La plataforma permite generar reportes?",
    answer:
      "Sí. Se pueden generar reportes personalizados sobre rutas, eventos, alertas y comportamiento operativo.",
  },
  {
    question: "¿Es compatible con aplicaciones móviles?",
    answer:
      "La plataforma es multi-dispositivo y puede utilizarse desde navegadores web modernos en escritorio, tablet o smartphone.",
  },
  {
    question: "¿Se pueden configurar alertas?",
    answer:
      "Sí. Se pueden definir alertas por velocidad, geocercas, encendido/apagado y eventos personalizados.",
  },
]

function Faq() {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)}

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Preguntas Frecuentes
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Resolvemos las dudas más comunes sobre nuestra plataforma tecnológica.
                    </p>
                </div>
                <div className="mt-16 max-w-3xl mx-auto space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                    ? "bg-white shadow-xl border-blue-500"
                                    : "bg-white shadow-sm border-gray-200 hover:shadow-md"
                                }`}
                            >

                            <button
                            onClick={() => toggle(index)}
                            className="w-full text-left px-8 py-6 flex justify-between items-center"
                            >
                            <span className="font-semibold text-gray-900">
                                {faq.question}
                            </span>

                            <span
                                className={`text-blue-600 text-2xl transform transition-all duration-300 ${
                                isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
                                }`}
                            >
                                +
                            </span>
                            </button>

                            <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                            >
                            <div className="overflow-hidden px-8 pb-8 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Faq