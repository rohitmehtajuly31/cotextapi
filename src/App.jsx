import React from 'react';
import Item from './component/Item.jsx';
import Cart from './component/cart.jsx';




const App=()=> {
  return (
<>
    <div>
      <h1>Hello React.</h1>
      
      <Item name="mackbook" price="155554"/>
      <Item name="samsung" price="20000"/>
      <Item name="Alienware" price="250000"/>
      { <Cart/>}
    </div>
    </>  
  );
}

// Log to console
export default App;
