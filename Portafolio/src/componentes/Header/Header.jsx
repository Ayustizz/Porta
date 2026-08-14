import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <a href="#inicio" className="header__logo">
          AROON<span>.</span>
        </a>

        <nav className="header__nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="header__button">
          Hablemos
        </a>

      </div>
    </header>
  )
}

export default Header