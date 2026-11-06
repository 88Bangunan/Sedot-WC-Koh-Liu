import { useContext, useState } from "react";
import { Hero } from "../../components/Hero";
import { Whyus } from "./Whyus";
import { OurService } from "./OurService";
import { Testimony } from "./Testimony";
import { Process } from "./Process";
import { Fee } from "./Fee";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { OrderButton } from "../../components/OrderButton";
import { ThemeContext } from "../../context/ThemeContext";

function Homepage() {
  const [wcDetail, setWCDetail] = useState(false);
  const [septicTankDetail, setSepticTankDetail] = useState(false);
  const [sinkDetail, setSinkDetail] = useState(false);
  const [cloggedDetail, setCloggedDetail] = useState(false);
  const [customerServiceDetail, setCustomerServiceDetail] = useState(false);
  const {theme} = useContext(ThemeContext)

  return (
    <>
      {/* Order Button WA Starts */}
      <OrderButton />
      {/* Order Button WA Ends */}

      {/* Hero Starts */}
      <Hero />
      {/* Hero Ends */}

      <div className={theme === 'dark' && 'bg-black text-white'}>
        {/* Why Us Starts */}
        <Whyus />
        {/* Why Us Ends */}

        {/* Our Services Starts */}
        <OurService
          wcDetail={wcDetail}
          setWCDetail={setWCDetail}
          septicTankDetail={septicTankDetail}
          setSepticTankDetail={setSepticTankDetail}
          sinkDetail={sinkDetail}
          setSinkDetail={setSinkDetail}
          cloggedDetail={cloggedDetail}
          setCloggedDetail={setCloggedDetail}
          customerServiceDetail={customerServiceDetail}
          setCustomerServiceDetail={setCustomerServiceDetail}
        />
        {/* Our Services Ends */}

        {/* Testimony Starts */}
        <Testimony />
        {/* Testimony Ends */}

        {/* Process Starts */}
        <Process />
        {/* Process Ends */}

        {/* Fee Starts */}
        <Fee />
        {/* Fee Ends */}

        {/* FAQ Starts */}
        <Faq />
        {/* FAQ Ends */}

        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
      </div>

    </>
  );
}

export default Homepage;
