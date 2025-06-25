// App.tsx
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Chatbox from "./components/ui/chatbox";
import FloatingIcon from "./components/ui/floatingIcon";
import { useWidgetConfig } from "./context/WidgetConfigContext";
import Chatbox1_3 from "./components/ui1/ui1_3/chatbox1_3";
import FloatingIcon1_3 from "./components/ui1/ui1_3/floatingIcon1_3";
import Chatbox1_2 from "./components/ui1/ui1_2/chatbox1_2";
import FloatingIcon1_2 from "./components/ui1/ui1_2/floatingIcon1_2";
import Chatbox1_1 from "./components/ui1/ui1_1/chatbox1_1";
import FloatingIcon1_1 from "./components/ui1/ui1_1/floatingIcon1_1";
import Chatbox2_1 from "./components/ui2/ui2_1/chatbox2_1";
import Chatbox2_2 from "./components/ui2/ui2_2/chatbox2_2";
import Chatbox2_3 from "./components/ui2/ui2_3/chatbox2_3";
import FloatingIcon2_1 from "./components/ui2/ui2_1/floatingIcon2_1";
import FloatingIcon2_2 from "./components/ui2/ui2_2/floatingIcon2_2";
import FloatingIcon2_3 from "./components/ui2/ui2_3/floatingIcon2_3";

function App() {
  const { id, name } = useWidgetConfig();
  const [toggel, setToggle] = useState(false);
  console.log(id, name);

  return (
    <>
      {id === 1.1 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox1_1 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon1_1 setToggle={setToggle} toggel={toggel} />
        </>
      )}
      {id === 1.2 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox1_2 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon1_2 setToggle={setToggle} toggel={toggel} />
        </>
      )}
      {id === 1.3 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox1_3 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon1_3 setToggle={setToggle} toggel={toggel} />
        </>
      )}
      {id === 2.1 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox2_1 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon2_1 setToggle={setToggle} toggel={toggel} />
        </>
      )}
      {id === 2.2 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox2_2 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon2_2 setToggle={setToggle} toggel={toggel} />
        </>
      )}
      {id === 2.3 && (
        <>
          <AnimatePresence>
            {toggel && <Chatbox2_3 key={"chatbox"} />}
          </AnimatePresence>
          <FloatingIcon2_3 setToggle={setToggle} toggel={toggel} />
        </>
      )}

      {id === 10 && (
        <>
          {" "}
          <AnimatePresence>
            {toggel && <Chatbox key="chatbox" />}
          </AnimatePresence>
          <FloatingIcon setToggle={setToggle} toggel={toggel} />
        </>
      )}
    </>
  );
}

export default App;
