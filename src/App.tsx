// App.tsx
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Chatbox from "./components/whatsapp/chatbox";
import FloatingIcon from "./components/whatsapp/floatingIcon";
import { useWidgetConfig } from "./context/WidgetConfigContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  const { id, name } = useWidgetConfig();
  const [toggel, setToggle] = useState(false);
  console.log(id, name);

  return (
    <>
      <SpeedInsights />

      <AnimatePresence>{toggel && <Chatbox key="chatbox" />}</AnimatePresence>
      <FloatingIcon setToggle={setToggle} toggel={toggel} />
    </>
  );
}

export default App;
