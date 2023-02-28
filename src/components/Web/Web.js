import Card from '../Card/Card';
import Header from '../Header/Header';
import '../Web/Web.css';

export default function Web() {
    return(
        <div>

            <Header/>
        <section className='about-container d-flex justify-content-center ' >
            <div className='web-description d-flex flex-column '>
                
                <div className='description d-flex flex-column m-3'>
                    <h1>
                        Frontend Developer.
                    </h1>
                    <h3>
                        Desarrollo web especializado en Front End.
                    </h3>
                    <p> 
                        En el 2020, comence a interesarme por la programacion, mi puerta de entrada fue el diseño web, y en un futuro dispositivos mobiles.

                    </p> <br/>
                    <p>
                        Mi principal experiencia en este campo es construyendo paginas utilizando HTML5, CSS3, JAVASCRIPT y REACT.
                        Actualmente me encuentro realizando la DIPLOMATURA de la UTN en FULL STACK DEVELOPER.

                    </p>
                </div>
                <div className='contenedor d-flex flex-row '>
                        <a href='https://rickandmorty-proyecto-ig.netlify.app/'>
                            <Card image={`${process.env.PUBLIC_URL}/images/rickymorty.jpg`}></Card>
                        </a>
                        <a href='https://github.com/IgnacioGarces/Elden-Search'>
                            <Card className='card-elden' image={`${process.env.PUBLIC_URL}/images/elden-ring.jpg`}></Card>
                        </a>
                </div>
            </div>

        </section>
        </div>
    )
}