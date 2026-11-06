import { FaClock, FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { generateTextTemplate } from "../../utils/generateTextTemplate";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ContactInformation = () => {

  const textTemplate = `Halo saya mau tanya-tanya soal layanan sedot wc dari koh liu nih 😊`
  const encodedText = generateTextTemplate(textTemplate)

  const mailSubject = `Pertanyaan seputar layanan Sedot WC Koh Liu`
  const encodedMailSubject = encodeURIComponent(mailSubject)
  const {theme} = useContext(ThemeContext)

  return (
    <div className="contact-information-container lg:w-1/2">
      <div className={`contact-information-outer border border-gray-300 shadow-xl rounded-lg ${theme === 'dark' && 'bg-white text-gray-500'} bg-gray-50 p-5 lg:p-10 box-border`}>
        <div className="contact-information-top flex flex-col gap-y-5">
          <div>
            <h3 className="capitalize text-2xl font-bold">Informasi Kontak</h3>
            <hr className="w-1/6 border-2 rounded-lg border-primary mt-3" />
          </div>
          <p className="text-gray-500">
            Hubungi kami kapan saja untuk konsultasi maupun pemesanan layanan.
            Tim kami siap datang ke lokasi Anda.
          </p>
        </div>
        <div className="contact-information-content flex flex-col gap-y-5 py-8">
          <div className="flex flex-col gap-y-2">
            <a href={`tel:+62-821-1705-8812`} target="_blank">
              <div className="flex items-center gap-x-2">
                <FaPhone className="rotate-90 text-primary" />
                <span className="uppercase">Telepon / Whatsapp</span>
              </div>
              <span>0821-1705-8812</span>
            </a>
          </div>
          <div className="flex flex-col gap-y-2">
            <a href={`mailto:andrew17288@gmail.com?subject=${encodedMailSubject}&body=${encodedText}`} target="_blank">
              <div className="flex items-center gap-x-2">
                <MdMail className="text-primary" />
                <span className="uppercase">EMAIL</span>
              </div>
              <span>steven.liu@binus.ac.id</span>
            </a>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <FaClock className="text-primary" />
              <span className="uppercase">JAM OPERASIONAL</span>
            </div>
            <span>24 Jam Non Stop</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <FaMapLocationDot className="text-primary" />
              <span className="uppercase">KANTOR OPERASIONAL</span>
            </div>
            <span>Gading Serpong, Kabupaten Tangerang</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <FaLocationDot className="text-primary" />
              <span className="uppercase">AREA LAYANAN</span>
            </div>
            <ul className="flex flex-col gap-y-1">
              <li>Jakarta</li>
              <li>Bogor</li>
              <li>Depok</li>
              <li>Tangerang</li>
              <li>Bekasi</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="uppercase">MEDIA SOSIAL</span>
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <FaWhatsapp className="text-xl font-bold" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <FaInstagram className="text-xl font-bold" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <FaFacebook className="text-xl font-bold" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <MdMail className="text-xl font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
