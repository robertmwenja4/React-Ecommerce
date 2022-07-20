import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route index element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;