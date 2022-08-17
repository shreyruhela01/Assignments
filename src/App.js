import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState(<b className="option"> Choose One Option </b> );
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}
