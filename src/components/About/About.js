import '../About/About.css';
import Header from '../Header/Header';



export default function About() {
    return(
        <section className='about-container d-flex flex-column justify-content-center '>
            <Header/>
            <div className='about-description d-flex justify-content-around flex-row'>

                <div className='description d-flex flex-column'>
                    <h1>
                        Full Stack Web Developer & Sound Designer.
                    </h1>
                    <h3>
                        I love designing and building digital products, prioritizing harmony between technology and aesthetics.
                    </h3>
                    <p>
                        Hello! My name is Ignacio Garcés, I was born in 1996 in Bahía Blanca.

                    </p><br/>
                    <p>
                        I have 8 years of experience working on audiovisual projects for film, TV, and theater.
                        Currently, I develop and design websites and also work on sound for video games.
                        
                    </p> <br/>
                    <p>
                    I have always been interested in art, and I am motivated by the potential uses of new technologies in digital experiences.
                    </p>
                </div>
                <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/About.jpg`} alt='code'/>
            </div>

        </section>
    )
        
} 