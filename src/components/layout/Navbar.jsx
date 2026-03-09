import { Link } from "react-router-dom"
import Container from "../ui/Container"
import Logo from "../../assets/images/LOGO-VITAL-LATAM_sin_fondo.png"

function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          <Link to="/" className="text-xl font-bold text-blue-700">
            <img src={Logo} alt="Logo VitalLatam" className="w-13 h-12 mr-2 inline-block" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/">Inicio</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/terms">Términos</Link>
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