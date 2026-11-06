import { useState } from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Faq = () => {
  const [faq, setFaq] = useState({
    price: false,
    emergency: false,
    stink: false,
  });

  function handleFaqPrice() {
    return setFaq({
      ...faq,
      price: !faq.price,
      emergency: false,
      stink: false,
    });
  }

  function handleFaqEmergency() {
    return setFaq({
      ...faq,
      price: false,
      emergency: !faq.emergency,
      stink: false,
    });
  }

  function handleFaqStink() {
    return setFaq({
      ...faq,
      price: false,
      emergency: false,
      stink: !faq.stink,
    });
  }

  return (
    <ScrollFadeIn>
      <div className="faq-container p-5 box-border my-15 xl:my-30 xl:w-12/13 xl:mx-auto">
        <div className="faq-top text-center flex flex-col gap-y-3">
          <h3 className="text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
            FAQ
          </h3>
          <p>
            Temukan jawaban atas pertanyaan yang paling sering diajukan seputar
            layanan sedot WC, proses kerja, dan estimasi biaya kami.
          </p>
        </div>
        <div className="faq-bottom mt-8">
          <div
            className="p-2 box-border flex items-center gap-x-2 border border-gray-300 cursor-pointer"
            onClick={handleFaqPrice}
          >
            {faq.price ? <FaMinus /> : <FaPlus />}
            <h3>Berapa harga jasa sedot WC ?</h3>
          </div>
          {faq.price && (
            <div className="animate-slideDown text-sm p-2 box-border flex items-center gap-x-2 border border-gray-300">
              <p>
                Harga menyesuaikan kondisi di lapangan. Silakan hubungi kami
                untuk estimasi, gratis !{" "}
              </p>
            </div>
          )}
          <div
            className="p-2 box-border flex items-center gap-x-2 border border-gray-300 cursor-pointer"
            onClick={handleFaqEmergency}
          >
            {faq.emergency ? <FaMinus /> : <FaPlus />}
            <h3>Apakah melayani darurat malam hari ?</h3>
          </div>
          {faq.emergency && (
            <div className="animate-slideDown text-sm p-2 box-border flex items-center gap-x-2 border border-gray-300">
              <p>Ya, kami siap melayani 24 jam</p>
            </div>
          )}
          <div
            className="p-2 box-border flex items-center gap-x-2 border border-gray-300 cursor-pointer"
            onClick={handleFaqStink}
          >
            {faq.stink ? <FaMinus /> : <FaPlus />}
            <h3>Apakah prosesnya kotor dan bau ?</h3>
          </div>
          {faq.stink && (
            <div className="animate-slideDown text-sm p-2 box-border flex items-center gap-x-2 border border-gray-300">
              <p>
                Tidak. Kami menggunakan peralatan modern dan proses yang bersih.
              </p>
            </div>
          )}
        </div>
      </div>
    </ScrollFadeIn>
  );
};
