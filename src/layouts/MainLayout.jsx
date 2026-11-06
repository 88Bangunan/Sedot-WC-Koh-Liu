import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MainLayout({
  responsiveNav,
  setResponsiveNav,
  serviceDropdown,
  setServiceDropdown,
  areaDropdown,
  setAreaDropdown,
}) {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <header>
        <Navbar
          responsiveNav={responsiveNav}
          setResponsiveNav={setResponsiveNav}
          serviceDropdown={serviceDropdown}
          setServiceDropdown={setServiceDropdown}
          areaDropdown={areaDropdown}
          setAreaDropdown={setAreaDropdown}
        />
      </header>

      <div className={`${theme === 'dark' && 'bg-black text-white'}`}>
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
