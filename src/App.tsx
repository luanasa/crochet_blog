// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Amigurumi from './pages/Amigurumi';
import Leitores from './pages/Leitores';
import Bolsas from './pages/Bolsas';
import Decor from './pages/Decor';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/amigurumi" element={<Amigurumi />} />
          <Route path="/leitores" element={<Leitores />} />
          <Route path="/bolsas" element={<Bolsas />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
