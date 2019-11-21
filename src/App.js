import React, { createContext, useState } from "react";
import Input from "./components/Input";
import Print from "./components/Print";

const AppContext = createContext({});

function App() {
  return (
    <div className="wrapper">
      <div className="title">
        <h1>
          <span>SASSIFY</span> 💅
        </h1>
        <h2>MAKE 👏 IT 👏 CLAP 👏</h2>
        <AppContext.Provider value={{}}>
          <Input />
          <Print />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
