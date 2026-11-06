import { HeroAbout } from "./HeroAbout";
import { Team } from "./Team";
import { VissionMission } from "./VissionMission";
import { WhyAbout } from "./WhyAbout";
import { CustomerReview } from "./CustomerReview";
import { OrderButton } from "../../components/OrderButton";

function Aboutpage() {
  return (
    <>
      {/* Order Button WA Starts */}
      <OrderButton />
      {/* Order Button WA Ends */}

      {/* Hero Starts */}
      <HeroAbout />
      {/* Hero Ends */}

      {/* Vision & Mission Starts */}
      <VissionMission />
      {/* Vission & Mission Ends */}

      {/* Team Behind the Koh Liu Starts */}
      <Team />
      {/* Team Behind the Koh Liu Ends */}

      {/* Why KohLiu Starts */}
      <WhyAbout />
      {/* Why KohLiu Ends */}

      {/* Customer's Review Starts */}
      <CustomerReview />
      {/* Customer's Review Ends */}
    </>
  );
}

export default Aboutpage;
