import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Geral} from './componentes/Geral';
import {Titulo} from './componentes/Titulo';

const Routing = () => (
    <BrowserRouter>
        <Routes>      
            <Route path="/" element={<Geral/>} />
            <Route path=":id" element={<Titulo/>} />
        </Routes>
    </BrowserRouter>

);

export default Routing;