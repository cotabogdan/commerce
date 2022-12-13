import "./App.css";

import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Components/Product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="allproducts" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
