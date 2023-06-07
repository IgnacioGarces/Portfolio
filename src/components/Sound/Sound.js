import Header from '../Header/Header';
import './Sound.css';


export default function Sound() {
    return(
        <section className='sound-container d-flex flex-column justify-content-center'>
            <Header/>
            <div className='sound-description d-flex justify-content-around  flex-row'>
                
                <div className='description d-flex flex-column m-3'>
                    <h1>
                        Sound Design.
                    </h1>
                    <h2>
                    Soundtrack Design for short films, medium-length films, feature films, and video games.

                    Field work in direct sound recording.
                    Collaboration with designers from various fields to create audio-visual experiences.
                    </h2>
                       <br/>
                       
                    <div className='d-flex flex-row justify-content-between'>
                        <div className='d-flex flex-column m-2'>
                            <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/Shotgun-Cyberpunk.png`} alt='code'/>
                                <div className='d-flex flex-row justify-content-between'>

                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/Remington_Reload_4_Final.wav`} controls></audio>
                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/Remington_sHOT_M.wav`} controls></audio>
                                </div>
                        </div>
                        <div className='d-flex flex-column m-2'>
                            <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/revolver-cyberpunk.png`} alt='code'/>
                                <div className='d-flex flex-row justify-content-between'>

                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/Dijkstra_Reload.wav`} controls></audio>
                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/DijkstraShot10-disparo9-sin-low.wav`} controls></audio>
                                </div>
                        </div>
                        <div className='d-flex flex-column m-2'>
                            <img className='img-code' src= {`${process.env.PUBLIC_URL}/images/smgcyberpunk.png`} alt='code'/>
                                <div className='d-flex flex-row justify-content-between'>

                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/Vector_Reload.wav`} controls></audio>
                                    <audio src= {`${process.env.PUBLIC_URL}/sounds/Vector_Burst.wav`} controls></audio>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sound-footer'>   
                <p>
                    Film & Tv direction: Centro de Investigación Cinematográfica (CiC) 2015 - 2018, Buenos Aires.
                </p> <br/>
                <p>
                    Sound Design: ENERC - 2018 - 2023, Buenos Aires.
                </p>
            </div> 

        </section>
    )
}