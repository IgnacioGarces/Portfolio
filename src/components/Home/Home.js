import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import './Home.css'

export default function Home() {
    return(

        <div className='main-container'>
            <header className='main'>
                    
                <div className='card-container'>
                    <Link className='link' to='/sound-design'>
                        <Card title='Sound Design' image={`${process.env.PUBLIC_URL}/images/waves.jpg`}/>
                    </Link>    
                    <Link to='/web-developer'>
                        <Card title='Web-Developer' image={`${process.env.PUBLIC_URL}/images/developer.jpg`}/>
                    </Link>    
                    <Link to='/about'>
                        <Card title='About' image={`${process.env.PUBLIC_URL}/images/about.jpg`}/>
                    </Link>    
                </div>
            </header>

        </div>
    )
}



// ${process.env.PUBLIC_URL} Se utiliza para acceder al url base de la carpeta 'public' 