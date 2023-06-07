import '../Header/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
    <nav class="navbar sticky-top navbar-expand-lg ">
        <div class="container-fluid">
            
            <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to='/'>
                    <button className='btn btn-dark btn-lg'>Home</button>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/web-developer'>
                    <button className='btn btn-dark btn-lg'>Web Developer</button>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/sound-design'>
                    <button className='btn btn-dark btn-lg'>Sound Design</button>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/about'>
                    <button className='btn btn-dark btn-lg'>About</button>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}