import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { Product } from './pages/Product';
import { FAQ } from './pages/Problem/FAQ';
import { TAC } from './pages/Problem/TAC';
import { PP } from './pages/Problem/PP';
import { Contact } from './pages/Problem/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/homepage' element={<HomePage /> } />
      <Route path='/product' element={<Product />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/terms' element={<TAC />} />
      <Route path='/privacy' element={<PP />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App