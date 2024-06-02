import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from  'react-router-dom'
import Home from './Components/Home/Home';
import Nosotras from './Components/Nosotras/Nosotras';
import Cursos from './Components/Cursos/Cursos';
import Galeria from './Components/Galeria/Galeria';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Nosotras' element={<Nosotras />}/>
      <Route path='/Cursos' element={<Cursos />}/>
      <Route path='/Galeria' element={<Galeria />}/>

    
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
