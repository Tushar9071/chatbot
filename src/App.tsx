import { useEffect, useState } from "react";
import "./App.css";
import FloatingButton from "./components/floatingButton/floatingButton";
import Chatbox from "./components/chatbox/chatbox";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/theme.context";
function App() {
  const { setThemeNo, currentTheme } = useTheme();
  console.log(currentTheme);
  useEffect(() => {
    setThemeNo(Number(prompt("Please enter No:")));
  }, []);
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
