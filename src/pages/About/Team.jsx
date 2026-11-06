import CountUp from "react-countup";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Team = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <ScrollFadeIn>
      <div className="team-container p-5 box-border my-5 lg:my-15 xl:my-30 grid grid-cols-1 md:flex md:items-center md:gap-x-15 gap-y-5 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
        <div className="md:w-1/2 md:order-2">
          <div className="team-top w-2/3">
            <h3 className="text-xl md:text-2xl">Tim di Balik Koh Liu</h3>
            <hr className="mt-2 border-gray-300" />
          </div>
          <div className={`team-content flex flex-col gap-y-5 mt-4 ${theme === 'dark' && 'text-white'} text-gray-500 py-5 border-gray-300 border-b`}>
            <p>
              Sedot WC Koh Liu dikelola oleh tim professional yang berpengalaman
              di bidang jasa sanitasi. Setiap anggota tim dibekali pelatihan
              teknis dan standar keselamatan kerja, sehingga setiap pengerjaan
              dapat ditangani dengan aman, rapi, dan tepat waktu.
            </p>
            <p>
              Kami percaya kepercayaan pelanggan dibangun dari konsistensi
              kualitas layanan - komunikasi yang jelas, harga transparan, dan
              hasil kerja yang bisa dipertanggungjawabkan di setiap proyek.
            </p>
          </div>
          <div className="team-bottom flex flex-col md:flex-row md:items-center md:gap-x-8 gap-y-5 pt-8 pb-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-primary text-2xl font-semibold">
                <CountUp end={5} suffix="+" duration={5} enableScrollSpy />
              </h3>
              <span className={`${theme === 'dark' && 'text-white'}text-gray-500 text-sm`}>Tahun Pengalaman</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-primary text-2xl font-semibold">
                <CountUp end={500} suffix="+" duration={5} enableScrollSpy />
              </h3>
              <span className={`${theme === 'dark' && 'text-white'}text-gray-500 text-sm`}>Pelanggan Terlayani</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-primary text-2xl font-semibold">24 Jam</h3>
              <span className={`${theme === 'dark' && 'text-white'}text-gray-500 text-sm`}>Siap Siaga</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full h-full rounded-lg shadow-xl"
            src="/img/Banner Jasa Sedot WC Koh Liu.png"
            alt=""
          />
        </div>
      </div>
    </ScrollFadeIn>
  );
};
