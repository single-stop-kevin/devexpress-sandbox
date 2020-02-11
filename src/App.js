import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React from "react";

import Button from "devextreme-react/button";

const App = () => {
  const sayHelloWorld = () => {
    alert("Hello World!");
  };

  return (
    <>
      <div>hi</div>
      <div>hello</div>
      <Button text="Click me" onClick={sayHelloWorld} />
    </>
  );
};

export default App;
