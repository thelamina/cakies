import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home/Home";
import Drawer from "./components/Drawer/Drawer";
import Cart from "./containers/Cart/Cart";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className='App'>
      <Router>
        <CartContextProvider>
          <Drawer>
            <Cart />
          </Drawer>
          <Home />
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
