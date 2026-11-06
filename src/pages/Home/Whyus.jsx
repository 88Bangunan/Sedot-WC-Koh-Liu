import { VscWorkspaceTrusted } from "react-icons/vsc";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { Ri24HoursFill } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Whyus = () => {

  return (
    <ScrollFadeIn>
      <div className={`p-5 box-border pt-30 pb-15 xl:w-12/13 xl:mx-auto`}>
        <div className="text-center">
          <h1 className="text-lg text-primary lg:text-2xl xl:text-3xl font-bold">
            Kenapa Harus Sedot WC Koh Liu ?
          </h1>
          <p className="italic xl:text-lg">
            Bukan Cuma Bersih, Kami Berikan{" "}
            <span className="text-primary font-bold">
              Solusi Tuntas Tanpa Cemas!
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-y-5 mt-10 md:flex-row md:gap-x-3 md:justify-between md:items-center">
          <div className="flex gap-x-5 justify-between items-center md:flex-col md:w-1/3 md:justify-between md:text-center">
            <VscWorkspaceTrusted className="text-[150px] md:text-[100px]" />
            <div className="flex flex-col gap-y-2">
              <h3 className="text-lg font-bold text-primary">
                Pengalaman Teruji & Tepercaya
              </h3>
              <p className="text-sm">
                Koh Liu telah melayani ribuan rumah, kos-kosan, pabrik, dan
                perkantoran{" "}
                <span className="text-primary font-bold">
                  selama bertahun-tahun.
                </span>{" "}
                Kami paham betul segala drama saluran mampet dan{" "}
                <span className="text-primary font-bold">
                  tahu cara tercepat mengatasinya.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-x-5 justify-between items-center md:flex-col md:w-1/3 md:justify-between md:text-center">
            <Ri24HoursFill className="text-[150px] order-2 md:text-[100px]" />
            <div className="flex flex-col gap-y-2 text-end md:order-2 md:text-center">
              <h3 className="text-lg font-bold text-primary">
                Respon Cepat 24/7
              </h3>
              <p className="text-sm">
                <span className="text-primary font-bold">
                  WC mampet tidak kenal waktu.
                </span>{" "}
                Tim Koh Liu siap meluncur kapan pun Anda butuhkan, baik siang
                maupun malam. Hubungi kami, dan tim terdekat akan langsung ke
                lokasi Anda{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-x-5 justify-between items-center md:flex-col md:w-1/3 md:justify-between  md:text-center">
            <IoPricetagOutline className="text-[120px] md:text-[100px]" />
            <div className="flex flex-col gap-y-2">
              <h3 className="text-lg font-bold text-primary">
                Harga Jujur & Transparan
              </h3>
              <p className="text-sm">
                <span className="text-primary font-bold">
                  Bebas Biaya Siluman!
                </span>{" "}
                Harga yang kami sepakati di awal adalah harga yang Anda bayar.
                Tidak ada tambahan biaya tak terduga di lokasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
