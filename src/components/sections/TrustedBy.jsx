import Container from "../ui/Container"
import dhl from "../../assets/logos/dhl-logo.webp"
import fedex from "../../assets/logos/fedex-logo.webp"
import ups from "../../assets/logos/ups-logo.webp"
import siemens from "../../assets/logos/siemens-logo.webp"
import bosch from "../../assets/logos/bosch-logo.webp"
import inexpress from "../../assets/logos/inexpress-logo.webp"

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <div className="relative w-full overflow-hidden tryusted-container">
                <div className="flex gap-24 animate-scroll whitespace-nowrap">
                    <img src={dhl} loading="lazy" className="mx-auto h-6 grayscale hover:grayscale-0 transition cursor-pointer" alt="dhl-logo" />
                    <img src={fedex} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="fedex-logo" />
                    <img src={ups} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="ups-logo" />
                    <img src={siemens} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="siemens-logo" />
                    <img src={bosch} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="bosch-logo" />
                    <img src={inexpress} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="inexpress-logo" />
                    {/* duplicados para loop infinito */}
                    <img src={dhl} loading="lazy" className="mx-auto h-6 grayscale hover:grayscale-0 transition cursor-pointer" alt="dhl-logo" />
                    <img src={fedex} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="fedex-logo" />
                    <img src={ups} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="ups-logo" />
                    <img src={siemens} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="siemens-logo" />
                    <img src={bosch} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="bosch-logo" />
                    <img src={inexpress} loading="lazy" className="mx-auto h-8 grayscale hover:grayscale-0 transition cursor-pointer" alt="inexpress-logo" />
                </div>
                {/* fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white"></div>
            </div>
      </div>
    </section>
  )
}