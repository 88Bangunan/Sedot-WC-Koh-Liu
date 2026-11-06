import { CiMail } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { generateTextTemplate } from "../utils/generateTextTemplate";

export const Footer = () => {

    const textTemplate = `Halo saya mau tanya-tanya soal layanan sedot wc dari koh liu nih 😊`
    const encodedText = generateTextTemplate(textTemplate)

  return (
    <div className="footer-container bg-primary text-white">
      <div className="footer-inner-container flex flex-col gap-y-10 px-5 py-10 box-border md:flex md:flex-row md:gap-x-10 md:items-start xl:w-12/14 xl:mx-auto">
        <div className="footer-top-overview flex flex-col gap-y-5 md:w-1/2">
          <h1 className="font-bold text-xl">Sedot WC Koh Liu</h1>
          <p>
            Melayani sedot WC, kuras septic tank, sedot wastafel, dan perbaikan
            saluran mampet. Respon cepat, unit siap berangkat 24 jam
          </p>
          <div className="flex items-center gap-x-3">
            <div className="bg-white text-primary p-2 box-border rounded-full text-xl">
              <FaTwitter />
            </div>
            <div className="bg-white text-primary p-2 box-border rounded-full text-xl">
              <FaFacebook />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <span>
              Untuk informasi lebih lanjut <br />
              silakan kontak:
            </span>
            <div className="flex items-center gap-x-3">
              <FaWhatsapp className="text-3xl" />
              <div>
                <a href={`https://wa.me/6282117058812?text=${encodedText}`} target="_blank">
                    <h4 className="font-semibold">Telfon / Whatsapp</h4>
                    <span>+62 821-1705-8812</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <CiMail className="text-3xl" />
              <div>
                <h4 className="font-semibold">Mail</h4>
                <span>info@sedot-wc-koh-liu.co.id</span>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <FaLocationDot className="text-3xl" />
              <div>
                <h4 className="font-semibold">Lokasi</h4>
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="region-container md:w-1/5">
          <h4 className="font-semibold text-lg">Wilayah</h4>
          <div className="flex flex-col gap-y-2 mt-5">
            <span>Jakarta</span>
            <span>Bogor</span>
            <span>Depok</span>
            <span>Tangerang</span>
            <span>Bekasi</span>
          </div>
        </div>

        <div className="detail-location-container flex flex-col gap-y-2 md:w-1/4">
          <h3 className="font-semibold text-xl">Sedot WC Koh Liu</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            optio?
          </p>
        </div>
      </div>

      <p className="text-center pb-5">
        &copy;2026 sedot-wc-koh-liu.co.id. <br />
        All Rights Reserved
      </p>
    </div>
  );
};
