import '../Sound/Sound.css';


export default function Sound() {
    return(
        <section className='about-container d-flex justify-content-center'>
            <div className='about-description d-flex justify-content-around  flex-row'>
                <div className='description d-flex flex-column m-3'>
                    <h1>
                        Diseñador de Imagen y Sonido.
                    </h1>
                    <h3>
                        Creo importante contar con un background teórico, estético y práctico para construir proyectos con un diseño coherente y cohecivo.
                    </h3>
                    <p>
                        Diseño de Bandas Sonoras para cortometrajes, mediometrajes y largometrajes.

                        Trabajo de campo en captación de sonido directo.
                        Cooperación con diseñadores de diversas áreas para crear experiencias audio-visuales.

                    </p> <br/>
                    <p>
                        Realizador Integral de Cine y Tv: Centro de Investigación Cinematográfica (CiC) 2015 - 2018, Buenos Aires.
                    </p> <br/>
                    <p>
                        Dirección de Sonido: Enerc - 2018 - 2023, Buenos Aires.

                    </p>
                </div>
                <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/sound-field.jpeg`} alt='code'/>
            </div>

        </section>
    )
}