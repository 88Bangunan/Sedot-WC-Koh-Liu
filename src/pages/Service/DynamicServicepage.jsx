import { useParams } from "react-router";
import { Hero } from "../../components/Hero";
import { OrderWay } from "./OrderWay";
import { Fee } from "../Home/Fee";
import { Contact } from "../Home/Contact";
import { OrderButton } from "../../components/OrderButton";

function DynamicServicepage() {
  const { slug } = useParams();

  const service = slug.split("-").join(" ");

  return (
    <>
      {/* Order Button WA Starts */}
      <OrderButton />
      {/* Order Button WA Ends */}

      {/* Hero Starts */}
      <Hero service={service} />
      {/* Hero Ends */}

      {/* Order Way Starts */}
      <OrderWay service={service} />
      {/* Order Way Ends */}

      {/* Fee Starts */}
      <Fee service={service} />
      {/* Fee Ends */}

      {/* Contact Starts */}
      <Contact service={service} />
    </>
  );
}

export default DynamicServicepage;
