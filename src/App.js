import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import ProductDetail from './pages/product/ProductDetail';
import About from './pages/about/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
