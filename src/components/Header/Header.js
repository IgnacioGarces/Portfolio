import '../Header/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
            
            <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to='/home'>
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/web-developer'>
                        <a class="nav-link" href="#">Web-Developer</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/sound-design'>
                        <a class="nav-link" href="#">Sound-Design</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/about'>
                        <a class="nav-link ">About</a>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}