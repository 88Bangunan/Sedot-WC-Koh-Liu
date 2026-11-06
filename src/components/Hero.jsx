import { FaWhatsapp } from "react-icons/fa";
import { generateTextTemplate } from "../utils/generateTextTemplate";

export const Hero = ({service, formattedCity}) => {

    let textTemplate = `Halo saya mau tanya-tanya soal layanan sedot wc dari koh liu nih 😊`;
    let encodedText = generateTextTemplate(textTemplate);

    if(service) {
        textTemplate = `Hallo KohLiu, saya ingin bertanya-tanya soal layanan ${service}`;
        encodedText = generateTextTemplate(textTemplate)
        return (
          <div className="h-140 lg:h-170 relative mt-30">
            <div className="absolute top-1/4 sm:top-1/5 md:top-1/6 left-1/15 right-1/8 z-1 sm:left-1/10 sm:right-1/10 md:left-1/20 lg:left-1/25 lg:right-1/4 xl:right-1/2 xl:top-1/4">
              <div className="flex flex-col gap-y-10 animate-fadeOutSwipeUp selection:bg-primary">
                <div className="text-shadow-2xs">
                  <h1 className="text-secondary font-semibold sm:text-lg md:text-xl">
                    <span className="capitalize">{service}</span> Koh Liu
                  </h1>
                  {service ? (
                    <h1 className="text-3xl text-secondary font-bold sm:text-5xl md:text-6xl">
                      <span className="capitalize">{service}</span> Panggilan{" "}
                      <span className="text-primary selection:bg-secondary">
                        Unit Siap 24 Jam
                      </span>
                    </h1>
                  ) : (
                    <h1 className="text-3xl text-secondary font-bold sm:text-5xl md:text-6xl">
                      Sedot WC Professional{" "}
                      <span className="text-primary selection:bg-secondary">
                        Unit Siap 24 Jam
                      </span>
                    </h1>
                  )}
                </div>
                <div>
                  {service ? (
                    <p className="text-gray-100 font-semibold text-sm text-shadow-xs md:text-lg">
                      Butuh <span className="capitalize">{service}</span>{" "}
                      terdekat yang datang cepat dan harganya transparan sejak
                      awal? Kami siap datang ke lokasi Anda, baik rumah tinggal,
                      kos, maupun ruko.
                    </p>
                  ) : (
                    <p className="text-gray-100 font-semibold text-sm text-shadow-xs md:text-lg">
                      Layanan cepat 24 jam dengan harga transparan, tanpa
                      bongkar, dan bergaransi. Rumah bersih dan nyaman kembali
                      hari ini juga.
                    </p>
                  )}
                  <a href={`https://wa.me/6282117058812?text=${encodedText}`} target="_blank">
                    <button className="bg-secondary text-black flex items-center gap-x-1 py-2 px-5 mt-5 box-border rounded-full font-semibold shadow-black shadow-xs transition ease-in cursor-pointer hover:shadow-green-500 hover:shadow-xl hover:bg-green-500 hover:text-secondary">
                        <FaWhatsapp />
                        Hubungi Sekarang
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/60"></div>
            <img
              className="min-w-full h-full object-cover"
              src="/img/sedot-wc-gambar.avif"
              alt=""
            />
          </div>
        );
    } 
    else {
        if(formattedCity) {
            textTemplate = `Hallo KohLiu, saya ingin bertanya-tanya soal layanan sedot WC di ${formattedCity}`;
            encodedText = generateTextTemplate(textTemplate)
        }
        return (
          <div className="h-140 lg:h-170 relative mt-30">
            <div className="absolute top-1/4 sm:top-1/5 md:top-1/6 left-1/15 z-1 sm:left-1/10 sm:right-1/10 md:left-1/20 lg:left-1/25 lg:right-1/4 xl:right-1/2 xl:top-1/4">
              <div className="flex flex-col gap-y-10 animate-fadeOutSwipeUp selection:bg-primary">
                <div className="text-shadow-2xs">
                  <h1 className="text-secondary font-semibold sm:text-lg md:text-xl">
                    Sedot WC Koh Liu
                  </h1>
                  {formattedCity ? (
                    <h1 className="text-3xl text-secondary font-bold sm:text-5xl md:text-6xl">
                      Sedot WC {formattedCity}{" "}
                      <span className="text-primary selection:bg-secondary">
                        Unit Siap 24 Jam
                      </span>
                    </h1>
                  ) : (
                    <h1 className="text-3xl text-secondary font-bold sm:text-5xl md:text-6xl">
                      Sedot WC Professional{" "}
                      <span className="text-primary selection:bg-secondary">
                        Unit Siap 24 Jam
                      </span>
                    </h1>
                  )}
                </div>
                <div>
                  {formattedCity ? (
                    <>
                      <p className="text-gray-100 font-semibold text-sm text-shadow-xs md:text-lg">
                        Melayani seluruh wilayah {formattedCity} untuk sedot WC,
                        septic tank, wastafel, dan saluran yang mampet.
                      </p>
                      <a
                        href={`https://wa.me/6282117058812?text=${encodedText}`}
                        target="_blank"
                      >
                        <button className="bg-secondary text-black flex items-center gap-x-1 py-2 px-5 mt-5 box-border rounded-full font-semibold shadow-black shadow-xs transition ease-in cursor-pointer hover:shadow-green-500 hover:shadow-xl hover:bg-green-500 hover:text-secondary">
                          <FaWhatsapp />
                          Hubungi Sekarang
                        </button>
                      </a>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-100 font-semibold text-sm text-shadow-xs md:text-lg">
                        Layanan cepat 24 jam dengan harga transparan, tanpa
                        bongkar, dan bergaransi. Rumah bersih dan nyaman kembali
                        hari ini juga.
                      </p>
                      <a
                        href={`https://wa.me/6282117058812?text=${encodedText}`}
                        target="_blank"
                      >
                        <button className="bg-secondary text-black flex items-center gap-x-1 py-2 px-5 mt-5 box-border rounded-full font-semibold shadow-black shadow-xs transition ease-in cursor-pointer hover:shadow-green-500 hover:shadow-xl hover:bg-green-500 hover:text-secondary">
                          <FaWhatsapp />
                          Hubungi Sekarang
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/60"></div>
            <img
              className="min-w-full h-full object-cover"
              src="/img/sedot-wc-gambar.avif"
              alt=""
            />
          </div>
        );
    }
}