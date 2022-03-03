import React from "react";
import Smachine from "./Smachine";

const App = () => {
  return (
    <>
      <h1
        style={{
          padding: "20px",
          textAlign: "center",
          color: "green",
          backgroundColor: "white",
        }}
      >
        Welcome to slot machine game
      </h1>
      <Smachine x="😀" y="😀" z="😀" />
      <Smachine x="🍎" y="🍌" z="🍇" />
      <Smachine x="💔" y="💔" z="💔" />
      />
    </>
  );
};

export default App;
