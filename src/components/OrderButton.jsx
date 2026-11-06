import { FaWhatsapp } from "react-icons/fa";
import { generateTextTemplate } from "../utils/generateTextTemplate";

export const OrderButton = () => {
    const textTemplate = `Hallo KohLiu, saya mau tanya-tanya soal layanan sedot WC 🚽`
    const encodedText = generateTextTemplate(textTemplate)

  return (
    <div className="fixed right-5 top-6/7 z-10">
      <div className="relative">
        <a href={`https://wa.me/6282117058812?text=${encodedText}`} target="_blank">
            <button className="w-full hover:scale-105 transition duration-500 ease-in-out cursor-pointer sm:flex sm:items-center sm:gap-x-3 bg-green-500 rounded-full text-white p-5 sm:px-8 box-border font-semibold">
            <FaWhatsapp className="text-2xl" />
            <p className="hidden text-lg sm:block">Pesan Sekarang</p>
            </button>
        </a>
        <div className="absolute rounded-full -z-1 -right-0.5 -top-0.5 -bottom-0.5 -left-0.5 animate-pingGentle bg-green-500 opacity-75"></div>
      </div>
    </div>
  );
};
