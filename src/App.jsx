import { useState } from "react";
import "./App.css";
import PortFolio from "./components/PortFolio";

function App() {
  const [count, setCount] = useState(0);
  const [check, setcheck] = useState(true);
  const handleAddButton = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <PortFolio />
    </div>
  );
}

export default App;
