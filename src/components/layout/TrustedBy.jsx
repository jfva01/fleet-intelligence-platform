import Container from "../ui/Container"
import dhl from "../../assets/logos/dhl-logo.png"
import fedex from "../../assets/logos/fedex-logo.png"
import ups from "../../assets/logos/ups-logo.png"
import siemens from "../../assets/logos/siemens-logo.png"
import bosch from "../../assets/logos/bosch-logo.png"
import inexpress from "../../assets/logos/inexpress-logo.png"

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <div className="relative w-full overflow-hidden tryusted-container">
                <div className="flex gap-24 animate-scroll whitespace-nowrap">
                    <img src={dhl} className="mx-auto h-6 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={fedex} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={ups} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={siemens} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={bosch} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={inexpress} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    {/* duplicados para loop infinito */}
                    <img src={dhl} className="mx-auto h-6 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={fedex} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={ups} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={siemens} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={bosch} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                    <img src={inexpress} className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" />
                </div>
                {/* fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white"></div>
            </div>
      </div>
    </section>
  )
}