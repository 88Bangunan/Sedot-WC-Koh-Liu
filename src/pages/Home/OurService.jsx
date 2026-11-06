import { FaSink, FaToilet } from "react-icons/fa";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { Ri24HoursFill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillCustomerService } from "react-icons/ai";
import { MdOutlinePropaneTank } from "react-icons/md";
import { generateTextTemplate } from "../../utils/generateTextTemplate";

export const OurService = ({wcDetail, setWCDetail, septicTankDetail, setSepticTankDetail, sinkDetail, setSinkDetail, cloggedDetail, setCloggedDetail, customerServiceDetail, setCustomerServiceDetail}) => {

    const services = [
      {
        image: "/sedot-wc-gambar.avif",
        name: "Sedot WC",
        icon: <FaToilet className="text-3xl" />,
        description:
          "Layanan sedot WC profesional untuk mengatasi tangki penuh menggunakan armada truk tangki modern yang siap kirim ke lokasi anda.",
        check: wcDetail,
        action: () => setWCDetail(!wcDetail),
      },
      {
        image: "/sedot-septicTank-gambar.jpg",
        name: "Sedot Septic Tank",
        icon: <MdOutlinePropaneTank className="text-3xl" />,
        description:
          "Layanan kuras septic tank atau sedot sepiteng untuk membersihkan endapan lumpur keras yang menumpuk di dasar tangki.",
        check: septicTankDetail,
        action: () => setSepticTankDetail(!septicTankDetail),
      },
      {
        image: "/sink-drain-cleaning-gambar.avif",
        name: "Sedot Wastafel",
        icon: <FaSink className="text-3xl" />,
        description:
          "Penanganan wastafel dapur atau kamar mandi yang tersumbat lemak, sisa makanan, dan kotoran menumpuk.",
        check: sinkDetail,
        action: () => setSinkDetail(!sinkDetail)
      },
      {
        image: "/clogged-drain-gambar.png",
        name: "Saluran Mampet",
        icon: <FaToilet className="text-3xl" />,
        description:
          "Layanan mengatasi saluran air dan WC mampet tanpa perlu bongkar lantai atau pipa.",
        check: cloggedDetail,
        action: () => setCloggedDetail(!cloggedDetail)
      },
      {
        image: "/customer-service-gambar.jpg",
        name: "Layanan Khusus",
        icon: <AiFillCustomerService className="text-3xl" />,
        description:
          "Konsultasikan masalah sedot WC, septic tank, atau saluran Anda langsung dengan tim ahli kami, tanpa biaya survei.",
        check: customerServiceDetail, 
        action: () => setCustomerServiceDetail(!customerServiceDetail)
      },
    ];

  return (
    <ScrollFadeIn>
      <div className="services-container-outer p-5 box-border my-15 xl:my-30 xl:w-12/13 xl:mx-auto">
        <div className="service-header text-center flex flex-col gap-y-2">
          <h1 className="text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
            Layanan Kami
          </h1>
          <h1 className="text-2xl font-semibold">
            Jasa Sedot WC, Septic Tank, Wastafel, dan Saluran Mampet
          </h1>
          <p className="xl:text-lg">
            Dikerjakan dengan alat modern tanpa merusak bangunan.
          </p>
        </div>
        <div className="service-content grid grid-cols-1 my-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {services.map((service, index) => {

                const textTemplate = `Hallo KohLiu, saya ingin bertanya-tanya soal harga layanan ${service.name}`
                const encodedTextContact = generateTextTemplate(textTemplate)

                return (
                  <div
                    className={`service-card-${index + 1} border border-gray-300 rounded-2xl p-3 box-border shadow-2xl cursor-pointer hover:scale-105 transition duration-500 ease-in-out`}
                  >
                    <div className="img-section relative">
                      <img
                        className="w-full rounded-t-2xl md:h-70 md:object-cover"
                        src={`/img/${service.image}`}
                        alt=""
                      />
                      <div className="absolute top-3/4 left-0 right-0 sm:top-5/6 md:top-6/7">
                        <div className="flex justify-between items-center border-2 rounded-lg shadow-xl py-5 px-3 box-border text-lg text-primary font-bold bg-white">
                          <h3>{service.name}</h3>
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <div className="service-text flex items-center gap-x-1 justify-between p-2 box-border bg-primary/15 rounded-lg text-sm mt-10 md:mt-15">
                      <span>Layanan:</span>
                      <div className="flex items-center gap-x-1">
                        <Ri24HoursFill className="text-xl text-primary" />
                        <span>24 Jam</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <IoPricetagsOutline className="text-xl text-primary" />
                        <span>Murah</span>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <VscWorkspaceTrusted className="text-xl text-primary" />
                        <span>Garansi</span>
                      </div>
                    </div>

                    <div className="detail-section my-3 cursor-pointer">
                      <div
                        className="flex items-center gap-x-1 text-lg font-semibold"
                        onClick={service.action}
                      >
                        {service.check ? (
                          <IoIosArrowDropdownCircle />
                        ) : (
                          <IoIosArrowDroprightCircle />
                        )}

                        <h3>Detail</h3>
                      </div>

                      {service.check && (
                        <p className="mt-3">{service.description}</p>
                      )}

                      <hr className="my-5" />

                      <a
                        href={`https://wa.me/6282117058812?text=${encodedTextContact}`}
                        target="_blank"
                      >
                        <button className="p-2 box-border bg-primary transition duration-500 ease-in-out hover:shadow-xl text-white font-semibold rounded-lg w-full cursor-pointer">
                            Info harga
                        </button>
                      </a>
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    </ScrollFadeIn>
  );
};
