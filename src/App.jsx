import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productlist" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;