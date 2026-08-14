import './Home.css'
import Header from '../../componentes/Header/Header'

function Home() {
  return (
    <main>

      <Header />

      {/* HERO */}

      <section id="inicio" className="hero">
        <div className="container hero__container">

          <div className="hero__content">

        

            <h1>
              Hola, soy <span>Aroon Yustiz</span>
              
            </h1>

            <p className="hero__description">
              Desarrollo sitios y aplicaciones web modernas,
              funcionales y adaptadas a los objetivos de mis clientes.
            </p>

            <div className="hero__buttons">
              <a
                href="#proyectos"
                className="button button--primary"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="button button--secondary"
              >
                Contactarme
              </a>
            </div>

          </div>

          <div className="hero__visual">
            <div className="hero__circle"></div>

            <div className="hero__card">
              <span>&lt;/&gt;</span>
            </div>
          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}

      <section className="skills">
        <div className="container">

          <p className="section__eyebrow">
            TECNOLOGÍAS
          </p>

          <div className="skills__grid">

            <div className="skill">
              <span>01</span>
              <h3>JavaScript</h3>
            </div>

            <div className="skill">
              <span>02</span>
              <h3>React</h3>
            </div>

            <div className="skill">
              <span>03</span>
              <h3>HTML & CSS</h3>
            </div>

            <div className="skill">
              <span>04</span>
              <h3>Git</h3>
            </div>

            <div className="skill">
              <span>05</span>
              <h3>Node.js</h3>
            </div>

            <div className="skill">
              <span>06</span>
              <h3>MySQL</h3>
            </div>

          </div>

        </div>
      </section>



      {/* SOBRE MI */}

      <section id="sobre-mi" className="about">
        <div className="container">

          <p className="section__eyebrow">
            SOBRE MÍ
          </p>

          <h2>
            Desarrollo con curiosidad,
            <span> diseño y código.</span>
          </h2>

          <div className="about__content">

            <p>
              Soy desarrollador web enfocado en buscar simplificar y ayudar a negocios a trabajar mejor 
            </p>

            <p>
              Actualmente estoy profundizando mis conocimientos
              en React, JavaScript, desarrollo backend y bases de datos.
            </p>

          </div>

        </div>
      </section>


      

      {/* PROYECTOS */}

      <section id="proyectos" className="projects">
        <div className="container">

          <div className="section__header">

            <div>
              <p className="section__eyebrow">
                PROYECTOS
              </p>

              <h2>
                Algunos trabajos.
              </h2>
            </div>

          </div>

          <div className="projects__grid">

            <article className="project">
              <div className="project__image">
                MOVEA
              </div>

              <div className="project__content">

                <p>E-COMMERCE</p>

                <h3>MOVEA</h3>

                <span>
                  React · JavaScript · CSS
                </span>

                <a href="#">
                  Ver proyecto →
                </a>

              </div>
            </article>


            <article className="project">
              <div className="project__image">
                PROYECTO 02
              </div>

              <div className="project__content">

                <p>APLICACIÓN WEB</p>

                <h3>Proyecto futuro</h3>

                <span>
                  React · Backend · MySQL
                </span>

                <a href="#">
                  Ver proyecto →
                </a>

              </div>
            </article>

          </div>

        </div>
      </section>


      {/* SERVICIOS */}

      <section id="servicios" className="services">
        <div className="container">

          <p className="section__eyebrow">
            SERVICIOS
          </p>

          <div className="services__grid">

            <article>
              <span>01</span>
              <h3>Desarrollo web</h3>
              <p>
                Sitios web modernos, responsive y buenos.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Tiendas online</h3>
              <p>
                E-commerce adaptados a las necesidades del negocio.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Landing pages</h3>
              <p>
                Páginas enfocadas en presentar productos o servicios.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* CONTACTO */}

      <section id="contacto" className="contact">
        <div className="container contact__container">

          <p className="section__eyebrow">
            CONTACTO
          </p>

          <h2>
            ¿Tienes un proyecto
            <span> en mente?</span>
          </h2>

          <a
            href="ayustiz0@gmail.com"
            className="button button--primary"
          >
            Contactame
          </a>

        </div>
      </section>


      {/* FOOTER */}

      <footer className="footer">
        <div className="container">

          <p>
            © 2026 Aroon Yustiz
          </p>

          <div>
            <a href="#">GitHub</a>
          </div>

        </div>
      </footer>

    </main>
  )
}

export default Home