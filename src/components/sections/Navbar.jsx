import { Link } from "react-router-dom"
import Container from "../ui/Container"
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  return (
    <header className="
        border-b
        bg-white
        border-slate-400
        text-slate-800
        dark:bg-slate-800
        dark:border-slate-600
        dark:text-gray-400
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
              text-slate-500
              dark:text-gray-400
            ">
            <Link to="/" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
              Inicio
            </Link>
            <Link to="/faq" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
              FAQ
            </Link>
            <Link to="/terms" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
              Términos
            </Link>
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