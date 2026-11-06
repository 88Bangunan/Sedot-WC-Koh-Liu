import { TiTick } from "react-icons/ti";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { generateTextTemplate } from "../../utils/generateTextTemplate";

export const Fee = ({ service }) => {
  const packageType = [
    {
      type: "Paket Standar",
      price: "400rb",
      desc: "Jasa sedot wc standar per tangki untuk perumahan.",
      services: ["Sedot WC rumah", "Selang hingga 50m"],
    },
    {
      type: "Paket Lengkap",
      price: "800-950rb",
      desc: "Pengecekan saluran mampet, sedot WC, hingga kuras septic tank, semua masalah langsung selesai.",
      services: ["Cek saluran mampet", "Sedot tinja", "Kuras septic tank"],
    },
    {
      type: "Paket Khusus",
      price: "Kustom",
      desc: "Cocok untuk industri dan komersil yang memiliki masalah tersendiri",
      services: ["Kontrak maintenance rutin", "Kapasitas besar"],
    },
  ];

  return (
    <ScrollFadeIn>
      <div className="fee-container p-5 box-border my-15 xl:my-30 xl:w-12/13 xl:mx-auto">
        <div className="fee-top text-center flex flex-col gap-y-3">
          <h3 className="text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
            Biaya
          </h3>
          {service ? (
            <>
              <h1 className="font-bold text-xl">
                Biaya <span className="capitalize">{service}</span>
              </h1>
              <p>
                Berapa biaya <span className="capitalize">{service}</span>?
                Harga transparan menyesuaikan dengan volume tangki, jarak
                lokasi, dan tingkat kesulitan pekerjaan
              </p>
            </>
          ) : (
            <>
              <h1 className="font-bold text-xl">
                Biaya Sedot WC & Septic Tank
              </h1>
              <p>
                Berapa biaya sedot WC dan septic tank? Harga transparan
                menyesuaikan dengan volume tangki, jarak lokasi, dan tingkat
                kesulitan pekerjaan
              </p>
            </>
          )}
        </div>
        <div className="fee-bottom grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {packageType.map((pack, index) => {
            const textTemplate = `Halo KohLiu saya mau pesan ${pack.type} dong 😊`;
            const encodedText = generateTextTemplate(textTemplate);

            if (index === 1 && pack.type === "Paket Lengkap") {
              return (
                <div
                  className={`card-package-${index + 1} p-8 box-border border border-gray-300 rounded-lg shadow-2xs transition duration-500 ease-out cursor-pointer bg-primary text-white scale-105 group`}
                >
                  <h1 className="text-5xl font-bold">{pack.price}</h1>
                  <div className="package-information flex flex-col gap-y-6 mt-5">
                    <div>
                      <h3 className="font-bold text-xl">{pack.type}</h3>
                      <p className="mt-2">{pack.desc}</p>
                    </div>
                    <a
                      href={`https://wa.me/6282117058812?text=${encodedText}`}
                      target="_blank"
                    >
                      <button className="w-full bg-white text-black p-2 box-border rounded-lg font-semibold cursor-pointer transition duration-500 ease-in-out group-hover:bg-white group-hover:text-black group-hover:shadow-xl">
                        Pesan Paket ini
                      </button>
                    </a>
                    <div>
                      {pack.services.map((service) => {
                        return (
                          <div className="flex items-center gap-x-2 border-b-2 border-gray-700 py-3 box-border">
                            <TiTick className="text-xl" />
                            <p className="text-lg">{service}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div
                className={`card-package-${index + 1} p-8 box-border border border-gray-300 rounded-lg shadow-2xs transition duration-500 ease-out cursor-pointer hover:bg-primary hover:text-white group`}
              >
                <h1 className="text-3xl">{pack.price}</h1>
                <div className="package-information flex flex-col gap-y-6 mt-5">
                  <div>
                    <h3 className="font-bold text-xl">{pack.type}</h3>
                    <p className="mt-2">{pack.desc}</p>
                  </div>
                  <a
                    href={`https://wa.me/6282117058812?text=${encodedText}`}
                    target="_blank"
                  >
                    <button className="w-full bg-black text-white p-2 box-border rounded-lg font-semibold cursor-pointer transition duration-500 ease-in-out group-hover:bg-white group-hover:text-black group-hover:shadow-xl">
                      Pesan Paket ini
                    </button>
                  </a>
                  <div>
                    {pack.services.map((service) => {
                      return (
                        <div className="flex items-center gap-x-2 border-b-2 border-gray-300 py-3 box-border">
                          <TiTick className="text-xl" />
                          <p className="text-lg">{service}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center mt-10 text-gray-500 before:mr-0.5 before:text-red-500 before:content-['*'] after:ml-0.5 after:text-red-500 after:content-['*']">
          Harga masih bisa naik atau turun tergantung masalah yang terjadi. Anda
          bisa berkonsultasi langsung via Whatsapp sebelum memutuskan order.
        </p>
      </div>
    </ScrollFadeIn>
  );
};
