import { useState } from "react";
import "./App.css";
import Chatbox from "./components/whatsapp/chatbox";
import FloatingIcon from "./components/whatsapp/floatingIcon";
import { useWidgetConfig } from "./context/WidgetConfigContext";

function App() {
  const { id, name } = useWidgetConfig();
  console.log(id, name);

  const [toggel, setToggle] = useState(false);

  return (
    <>
      {toggel && <Chatbox />}
      <FloatingIcon setToggle={setToggle} toggel={toggel} />
    </>
  );
}

export default App;
