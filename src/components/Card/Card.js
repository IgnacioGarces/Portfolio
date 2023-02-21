import './Card.css';

export default function Card( {title, image}) {
    
    return (
        <div>

            <h2 className='card-title'>{title}</h2>
        <div className='card' style={{backgroundImage: `url(${image})`}}>
        </div>
        </div>
    )
}