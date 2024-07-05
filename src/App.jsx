import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
