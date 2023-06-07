import Header from '../Header/Header';
import '../Sound/Sound.css';


export default function Sound() {
    return(
        <section className='sound-container d-flex flex-column justify-content-center'>
            <Header/>
            <div className='sound-description d-flex justify-content-around  flex-row'>
                
                <div className='description d-flex flex-column m-3'>
                    <h1>
                        Sound Design.
                    </h1>
                    <h3>
                    Soundtrack Design for short films, medium-length films, feature films, and video games.

                    Field work in direct sound recording.
                    Collaboration with designers from various fields to create audio-visual experiences.
                    </h3>
                    
                       <br/>
                    <p>
                        Film & Tv direction: Centro de Investigación Cinematográfica (CiC) 2015 - 2018, Buenos Aires.
                    </p> <br/>
                    <p>
                        Sound Design: Enerc - 2018 - 2023, Buenos Aires.
                    </p>
                </div>
                <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/sound-field.jpeg`} alt='code'/>
            </div>

        </section>
    )
}