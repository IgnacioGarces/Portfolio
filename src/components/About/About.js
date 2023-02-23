import '../About/About.css';
import Header from '../Header/Header';



export default function About() {
    return(
        <section className='about-container d-flex flex-column justify-content-center'>
            <Header/>
            <div className='about-description d-flex justify-content-around  flex-row-reverse'>

                <div className='description d-flex flex-column m-3'>
                    <h1>
                        Disenador de Imagen y Sonido, Frontend Developer.
                    </h1>
                    <h3>
                        Amo diseñar y construir productos digitales, técnica y estética en armonía
                    </h3>
                    <p>
                        Tengo 8 años de experiencia realizando proyectos audiovisuales para cine, tv y teatro.
                        


                    </p> <br/>
                    <p>
                        En el 2020, comence a interesarme por la programacion, mi puerta de entrada fue el diseño web, y en un futuro dispositivos mobiles.

                    </p><br/>
                    <p>
                        Mi principal experiencia en este campo es construyendo paginas utilizando HTML5, CSS3, JAVASCRIPT y REACT.
                        Actualmente me encuentro realizando la DIPLOMATURA de la UTN en FULL STACK DEVELOPER.

                    </p>
                </div>
                <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/About.jpg`} alt='code'/>
            </div>

        </section>
    )
        
} 