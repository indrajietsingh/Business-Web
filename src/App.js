import React from "react";
import Icon from "./Component/Header";
import Content from "./Component/Content";
import '../src/index.css'
import Middle from "./Component/Middle ";
import Metal from "./Component/Metal";
import Item from "./Component/Item";
function App(){
  return(
    <>
    <div className="Text">
      <Icon/>
      <Content/>
      <Middle/>
      <Metal/>
      <Item/>
      </div>
    </>
  )
}
export default App;
