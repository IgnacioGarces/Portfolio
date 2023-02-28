import '../About/About.css';
import Header from '../Header/Header';



export default function About() {
    return(
        <section className='about-container d-flex flex-column justify-content-center '>
            <Header/>
            <div className='about-description d-flex justify-content-around flex-row'>

                <div className='description d-flex flex-column'>
                    <h1>
                        Diseñador de Imagen y Sonido, Frontend Developer.
                    </h1>
                    <h3>
                        Amo diseñar y construir productos digitales privilegiando la armonía entre técnica y estética. 
                    </h3>
                    <p>
                        Hola! Mi nombre es Ignacio Garcés, nací en 1996 Bahía Blanca. 

                    </p><br/>
                    <p>
                        Tengo 8 años de experiencia realizando proyectos audiovisuales para cine, tv y teatro.
                        
                    </p> <br/>
                    <p>
                        Siempre me intereso el arte digital, me motivan las nuevas tecnologías y sus potenciales usos en productos dirigidos a usuarios. 
                    </p>
                </div>
                <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/About.jpg`} alt='code'/>
            </div>

        </section>
    )
        
} 