import React from "react";
import Tree from "./components/Tree";
import Spacer from "./components/Spacer";
import HarvestButton from "./components/harvestButton";

function App() {
  return (
  
  <>

    <div
      style={{
        display: "flex",
        alignItems: "flex-end", 
        height: "80vh", 
        flexDirection: "row", 
      }}
    >
      <Tree />
      <Spacer />
      <Tree />
      <Spacer />
      <Tree />
      <Spacer />
      <Tree />
    </div>



  </>
  

  );
}

export default App;
