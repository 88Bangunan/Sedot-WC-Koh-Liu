import { useParams } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { OrderButton } from "../../components/OrderButton";
import { OurService } from "../Home/OurService";
import { Fee } from "../Home/Fee";
import { Contact } from "../Home/Contact";
import { Footer } from "../../components/Footer";

function DynamicAreaPage({
  responsiveNav,
  setResponsiveNav,
  serviceDropdown,
  setServiceDropdown,
  areaDropdown,
  setAreaDropdown,
}) {
  const { slug } = useParams();

  const formatCity = slug.split("-");
  const city = formatCity[formatCity.length - 1];
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      {/* Order Button WA Starts */}
      <OrderButton />
      {/* Order Button WA Ends */}

      {/* Navbar Starts */}
      <Navbar
        responsiveNav={responsiveNav}
        setResponsiveNav={setResponsiveNav}
        serviceDropdown={serviceDropdown}
        setServiceDropdown={setServiceDropdown}
        areaDropdown={areaDropdown}
        setAreaDropdown={setAreaDropdown}
      />
      {/* Navbar Ends */}

      {/* Hero Starts */}
      <Hero formattedCity={formattedCity} />
      {/* Hero Ends */}

      {/* Our Services Starts */}
      <OurService />
      {/* Our Services Ends */}

      {/* Fee Starts */}
      <Fee />
      {/* Fee Ends */}

      {/* Contact Starts */}
      <Contact />
      {/* Contact Ends */}

      {/* Footer Starts */}
      <Footer />
      {/* Footer Ends */}
    </>
  );
}

export default DynamicAreaPage;
