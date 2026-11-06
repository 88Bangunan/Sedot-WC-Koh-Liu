import { Route, Routes } from "react-router";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpage";
import Servicepage from "./pages/Service/Servicepage";
import Contactpage from "./pages/Contact/Contactpage";
import Areapage from "./pages/Area/Areapage";
import DynamicAreaPage from "./pages/Area/DynamicAreapage";
import { useState } from "react";
import DynamicServicepage from "./pages/Service/DynamicServicepage";
import NotFoundpage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [areaDropdown, setAreaDropdown] = useState(false);

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            responsiveNav={responsiveNav}
            setResponsiveNav={setResponsiveNav}
            serviceDropdown={serviceDropdown}
            setServiceDropdown={setServiceDropdown}
            areaDropdown={areaDropdown}
            setAreaDropdown={setAreaDropdown}
          />
        }
      >
        {/* Static Routes */}
        <Route
          index
          element={
            <Homepage />
          }
        />
        <Route path="/service" element={<Servicepage />} />
        <Route
          path="/about"
          element={
            <Aboutpage />
          }
        />
        <Route
          path="/contact"
          element={
            <Contactpage />
          }
        />

        <Route path="/area" element={<Areapage />} />

        {/* Dynamic Routes */}
        <Route
          path="/area/:slug"
          element={
            <DynamicAreaPage responsiveNav={responsiveNav} setResponsiveNav={setResponsiveNav} serviceDropdown={serviceDropdown} setServiceDropdown={setServiceDropdown} areaDropdown={areaDropdown} setAreaDropdown={setAreaDropdown} />
          }
        />

        <Route
          path="/service/:slug"
          element={
            <DynamicServicepage />
          }
        />

        {/* 404 Routes / Exception Routes */}
        <Route
          path="*"
          element={
            <NotFoundpage
              responsiveNav={responsiveNav}
              setResponsiveNav={setResponsiveNav}
              serviceDropdown={serviceDropdown}
              setServiceDropdown={setServiceDropdown}
              areaDropdown={areaDropdown}
              setAreaDropdown={setAreaDropdown}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
