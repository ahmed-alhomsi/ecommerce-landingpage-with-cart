import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation"
import { Container, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import ProductsPage from "./components/ProductsPage";
import {Routes, Route} from "react-router-dom"
import Cart from "./components/Cart"

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="App">
      <Navigation />

      <Container className="mt-5 d-flex gap-4 flex-wrap">

      <Routes>
          <Route path="/" element={<ProductsPage products={products} />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
        
      </Container>
    </div>
  );
}

export default App;
