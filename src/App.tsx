import { Outlet } from "react-router-dom";
import "./App.css";
import { NavbarApp } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarApp />
      <Outlet />
    </>
  );
}

export default App;
