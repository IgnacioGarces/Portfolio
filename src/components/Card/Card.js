import './Card.css';

export default function Card( {title, image}) {
    
    return (
        <div>

        <div className='card' style={{backgroundImage: `url(${image})`}}>
            <h2 className='card-title'>{title}</h2>
        </div>
        </div>
    )
}