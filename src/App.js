import React from "react";
import Icon from "./Component/Header";
import Content from "./Component/Content";
import '../src/index.css'
import Middle from "./Component/Middle ";
function App(){
  return(
    <>
    <div className="Text">
      <Icon/>
      <Content/>
      <Middle/>
      </div>
    </>
  )
}
export default App;
