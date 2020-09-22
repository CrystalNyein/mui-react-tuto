import React from "react";
import "./App.css";
import ButtonTuto from "./tutorials/buttons #4/ButtonTuto";
import UXdesign from "./tutorials/coding ux design #2/UXdesign";
import MakeStylesTuto from "./tutorials/make styles #3/MakeStylesTuto";
import ThemeTuto from "./tutorials/themes #6/ThemeTuto";
import TypographyTuto from "./tutorials/typography #5/TypographyTuto";

function App() {
  return (
    <div className="App">
      {/*
        <UXdesign />
        <MakeStylesTuto cool={false} />
        
      <ButtonTuto />
      
      <TypographyTuto />
       */}
      <ThemeTuto />
    </div>
  );
}

export default App;
