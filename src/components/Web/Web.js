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
                        Desarrollo web Full Stack MERN.
                    </h3>
                    <p> 
                    In 2020, I started getting interested in programming, and my entry point was web design. The technologies I have been implementing are MySQL, Express.js, React.js, Node.js, JavaScript, and TypeScript. .

                    </p> <br/>
                    
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