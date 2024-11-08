import { Outlet } from "react-router-dom";
import "./App.css";
import { NavbarApp } from "./components/Navbar/Navbar";
import { FooterApp } from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <NavbarApp />
      <Outlet />
      <FooterApp />
    </div>
  );
}

export default App;
