import React from "react";

export default function Navbar(props) {

  

  return (<div>
    <input type="text" placeholder="Item Name"></input>
    <button type="addItem" onClick={() => {
      
      console.log("HELLO ")
    }}>Add</button>
  </div>


  )



}







