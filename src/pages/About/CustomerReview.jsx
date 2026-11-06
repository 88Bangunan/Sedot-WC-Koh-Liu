import { IoMdStar } from "react-icons/io";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const CustomerReview = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <ScrollFadeIn>
      <div className="customer-review-container p-5 box-border py-5 lg:py-15 xl:py-30 grid grid-cols-1 md:gap-x-15 gap-y-5 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
        <div className="customer-review-top">
          <h3 className="text-xl md:text-2xl text-primary pb-2 font-bold">
            Penilaian & Ulasan Pelanggan
          </h3>
          <hr className="border border-gray-300 w-1/3 mt-3" />
        </div>
        <div className="customer-review-content grid grid-cols-1 gap-y-10 md:grid-cols-2 md:py-10 lg:py-15">
          <div className="customer-review-number">
            <h3 className="text-[40px] font-bold md:text-5xl lg:text-6xl">
              4.9+
            </h3>
            <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
              <IoMdStar className="text-primary" />
              <IoMdStar className="text-primary" />
              <IoMdStar className="text-primary" />
              <IoMdStar className="text-primary" />
              <IoMdStar className="text-primary" />
            </div>
            <span
              className={`${theme === "dark" && "text-white"} block mt-2 text-gray-500`}
            >
              rata-rata dari ulasan pelanggan kami
            </span>
          </div>
          <div className="customer-review-description flex flex-col gap-y-5 justify-evenly">
            <div className="service-review pb-3 border-b border-gray-300 box-border">
              <div className="flex justify-between items-center">
                <span
                  className={`${theme === "dark" && "text-white"} text-gray-700`}
                >
                  Pelayanan
                </span>
                <div className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-2">
                  <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                  </div>
                  <span
                    className={`${theme === "dark" && "text-white"} text-gray-500`}
                  >
                    4.9
                  </span>
                </div>
              </div>
            </div>
            <div className="service-review pb-3 border-b border-gray-300 box-border">
              <div className="flex justify-between items-center">
                <span
                  className={`${theme === "dark" && "text-white"} text-gray-700`}
                >
                  Kecepatan Unit Sampai
                </span>
                <div className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-2">
                  <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                  </div>
                  <span
                    className={`${theme === "dark" && "text-white"} text-gray-500`}
                  >
                    4.8
                  </span>
                </div>
              </div>
            </div>
            <div className="service-review pb-3 border-b border-gray-300 box-border">
              <div className="flex justify-between items-center">
                <span
                  className={`${theme === "dark" && "text-white"} text-gray-700`}
                >
                  Kecepatan Pengerjaan
                </span>
                <div className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-2">
                  <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                  </div>
                  <span
                    className={`${theme === "dark" && "text-white"} text-gray-500`}
                  >
                    4.8
                  </span>
                </div>
              </div>
            </div>
            <div className="service-review pb-3 border-b border-gray-300 box-border">
              <div className="flex justify-between items-center">
                <span
                  className={`${theme === "dark" && "text-white"} text-gray-700`}
                >
                  Kerapihan & Kebersihan Pengerjaan
                </span>
                <div className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-2">
                  <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                  </div>
                  <span
                    className={`${theme === "dark" && "text-white"} text-gray-500`}
                  >
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <div className="service-review pb-3 border-b border-gray-300 box-border">
              <div className="flex justify-between items-center">
                <span
                  className={`${theme === "dark" && "text-white"} text-gray-700`}
                >
                  Hasil Pengerjaan yang Memuaskan
                </span>
                <div className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-2">
                  <div className="star-container flex items-center text-lg md:text-xl lg:text-2xl">
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                    <IoMdStar className="text-primary" />
                  </div>
                  <span
                    className={`${theme === "dark" && "text-white"} text-gray-500`}
                  >
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-review-images grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <img
              className={`${theme === 'dark' && 'shadow-white shadow-xl'} w-full h-full object-cover rounded-lg`}
              src="/img/worker-image.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className={`${theme === 'dark' && 'shadow-white shadow-xl'} w-full h-full object-cover rounded-lg`}
              src="/img/sedot-septicTank-gambar.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className={`${theme === 'dark' && 'shadow-white shadow-xl'} w-full h-full object-cover rounded-lg`}
              src="/img/clogged-drain-gambar.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={`${theme === 'dark' && 'shadow-white shadow-xl'} w-full h-full object-cover rounded-lg`}
              src="/img/sink-drain-cleaning-gambar.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
