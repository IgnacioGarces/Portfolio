import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Sound from '../Sound/Sound';
import Web from '../Web/Web'
export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sound-design' element={<Sound/>}/>
                <Route path='/web-developer' element={<Web/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}