import { FaWhatsapp } from "react-icons/fa";
import { generateTextTemplate } from "../../utils/generateTextTemplate";

export const HeroAbout = () => {
  const textTemplate = `Halo saya mau tanya-tanya soal layanan sedot wc dari koh liu nih 😊`;
  const encodedText = generateTextTemplate(textTemplate);

  return (
    <div className="hero-container h-140 lg:h-170 relative mt-30">
      <img
        className="w-full h-full object-cover"
        src="/img/worker-image.jpeg"
        alt=""
      />
      <div className="bg-black/55 absolute left-0 right-0 top-0 bottom-0"></div>
      <div className="text-container absolute top-1/4 sm:top-1/3 left-1/15 right-1/8 z-1 sm:left-1/10 sm:right-1/10 md:left-1/20 md:right-1/3 lg:left-1/13 xl:right-1/2 animate-fadeInSlideDown">
        <div className="flex flex-col gap-y-3">
          <h1 className="uppercase text-shadow-2xs text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Tentang Kami
          </h1>
          <p className="text-white text-justify">
            <span className="text-primary font-semibold text-shadow-black text-shadow-2xs">
              Sedot WC Koh Liu
            </span>{" "}
            adalah penyedia jasa sedot WC, septic tank, wastafel, dan jasa WC
            mampet yang professional. Melayani kebutuhan rumah tangga hingga
            skala industri. Selain sedot, kami juga melayani layanan khusus
            lainnya seperti perbaikan dan pergantian pipa saluran
          </p>
          <div className="">
            <a href={`https://wa.me/6282117058812?text=${encodedText}`} target="_blank">
                <button className="bg-secondary text-center text-black flex items-center gap-x-1 py-2 px-5 mt-5 box-border rounded-full font-semibold shadow-black shadow-xs transition ease-in cursor-pointer hover:shadow-green-500 hover:shadow-xl hover:bg-green-500 hover:text-secondary">
                <FaWhatsapp />
                Hubungi Sekarang
                </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
