import React, { useState } from "react";
import "./App.scss";
import Header from "../Header";
import Main from "../Main";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} toggle={toggle} />
      <div className="App-intro">
        <Main activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
