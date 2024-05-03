import { useContext, useState } from "react";
import { CartContext } from "../context/cart";
const Cart=()=>{
  const cart =useContext(CartContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (cart && cart.items) {
      cart.items.forEach((item) => {
        totalPrice += Number(item.price);
      });
    }
    return totalPrice;
  };
 
  return(
    <div>
       
    <h1>hello</h1>
    <p>Total Price: {calculateTotalPrice()}</p>
    {cart &&
    cart.items.map((item)=>(
      <li>
        {item.name} -- {item.price}
       
        
      </li>
      
     
     
   
    ))}
    </div>
  )
}
export default Cart