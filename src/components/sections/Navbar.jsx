import { Link } from "react-router-dom"
import Container from "../ui/Container"
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  return (
    <header className="
        border-b
        border-slate-200
        dark:border-slate-600
        bg-white
        dark:bg-slate-700
        text-slate-800
        dark:text-white
        transition-colors
        duration-300
      ">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          <Link to="/" className="text-xl font-bold text-blue-700">
            <img src="/images/logo-vital-latam.webp" 
              alt="Logo VitalLatam" 
              className="w-16 h-12 mr-2 inline-block"
              loading="lazy"
            />
          </Link>

          <nav className="
              hidden
              md:flex
              items-center
              gap-8
              font-medium
              text-slate-700
              dark:text-slate-200
              transition-colors
              duration-300
            ">
            <Link to="/">Inicio</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/terms">Términos</Link>
            <ThemeToggle />
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            Contacto
          </button>

        </div>
      </Container>
    </header>
  )
}

export default Navbar