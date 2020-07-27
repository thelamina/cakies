import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home/Home";
import Drawer from "./components/Drawer/Drawer";
import Cart from "./containers/Cart/Cart";
import CartContextProvider from "./contexts/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <CartContextProvider>
          <Navbar/>
          <Drawer>
            <Cart />
          </Drawer>
          <Home />
          <Footer/>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
