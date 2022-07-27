import { BrowserRouter,Navigate, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";


const App = () => {
  const user = true;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Product />}/>
          <Route index element={<Home />} />
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;