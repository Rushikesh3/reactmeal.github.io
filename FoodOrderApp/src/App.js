 import React ,{ Fragment, useState } from "react";
 import {ReactDOM}  from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
 import CartProvider from "./Store/CartProvider";
 
 function App(){
const [cartIsShown,setCartIsShown]=useState(false);
const  showCartHandler=()=>{

  setCartIsShown(true);
}

const hideCartHandler=()=>{
  setCartIsShown(false);
}
  return (
    <CartProvider>
   {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
 }

export default App;
