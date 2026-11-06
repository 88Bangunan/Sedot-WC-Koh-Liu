import { ContactMe } from "./ContactMe";
import { ContactInformation } from "./ContactInformation";
import { OrderForm } from "./OrderForm";
import { OrderButton } from "../../components/OrderButton";
import ScrollFadeIn from "../../components/ScrollFadeIn";

function Contactpage() {

  return (
    <>
      {/* Order Button Starts */}
      <OrderButton />
      {/* Order Button Ends */}

      {/* Contact Me Starts */}
      <ContactMe />
      {/* Contact Me Ends */}

      <ScrollFadeIn>
        <div className="flex flex-col lg:flex-row lg:gap-x-10 p-5 box-border py-5 xl:pb-20 md:gap-x-15 gap-y-5 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
          {/* Contact Information Starts */}
          <ContactInformation />
          {/* Contact Information Ends */}

          {/* Order Form Starts */}
          <OrderForm />
          {/* Order Form Ends */}
        </div>
      </ScrollFadeIn>
    </>
  );
}

export default Contactpage;
