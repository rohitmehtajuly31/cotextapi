
import React,{useContext} from 'react';
import { CartContext } from '../context/cart';



const Item =(props)=>{
  const Cart=useContext(CartContext)
  console.log("cart",Cart)
  return (
    <div className='App'>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <button onClick={()=>Cart.setItems([...Cart.items,{name:props.name, price:props.price, }])}>Add to card</button>
    </div>
  );
}

export default Item