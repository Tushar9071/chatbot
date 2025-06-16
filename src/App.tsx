import { useState } from "react";
import "./App.css";
import FloatingButton from "./components/floatingButton/floatingButton";
import Chatbox from "./components/chatbox/chatbox";
import { Route, Routes } from "react-router-dom";

function App() {
  const [toggel, setToggle] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {toggel ? (
              <Chatbox toggel={setToggle} />
            ) : (
              <FloatingButton toggel={setToggle} />
            )}
          </>
        }
      />
    </Routes>
  );
}

export default App;
