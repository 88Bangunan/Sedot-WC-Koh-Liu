import { FaMinus } from "react-icons/fa";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const VissionMission = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <ScrollFadeIn>
        <div className="vission-mission-container p-5 box-border my-5 lg:my-15 xl:my-30 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
            <div className="vission-mission-container-inner flex flex-col gap-y-7 md:flex-row md:gap-x-20">
                <div className="vission-container md:w-1/2">
                    <h3 className="text-2xl font-semibold">Visi</h3>
                    <hr className="mt-5 mb-8 border border-gray-300" />
                    <p className={`${theme === 'dark' && 'text-white'} text-gray-500`}>
                        Menjadi perusahaan jasa sanitasi yang terpercaya, baik untuk rumah
                        tangga maupun industri, yang dikenal atas kecepatan, kebersihan, dan
                        profesionalisme di setiap pengerjaan.
                    </p>
                </div>
                <div className="mission-container md:w-1/2">
                    <h3 className="text-2xl font-semibold">Misi</h3>
                    <hr className="mt-5 mb-8 border border-gray-300" />
                    <ul className={`flex flex-col gap-y-3 ${theme === 'dark' && 'text-white'} text-gray-500`}>
                        <li className="flex gap-x-3">
                        <FaMinus className="w-1/20" />
                        <p className="w-19/20">
                            Memberikan layanan sedot WC, septic tank, dan wastafel yang
                            cepat, higienis, dan bebas bau.
                        </p>
                        </li>
                        <li className="flex gap-x-3">
                        <FaMinus className="w-1/20" />
                        <p className="w-19/20">
                            Menyediakan layanan khusus seperti perbaikan dan pergantian pipa
                            saluran sesuai standar teknis dan kebutuhan lokasi.
                        </p>
                        </li>
                        <li className="flex gap-x-3">
                        <FaMinus className="w-1/20" />
                        <p className="w-19/20">
                            Melayani pelanggan rumah tangga maupun industri dengan harga
                            transparan dan tanpa biaya tersembunyi.
                        </p>
                        </li>
                        <li className="flex gap-x-3">
                        <FaMinus className="w-1/20" />
                        <p className="w-19/20">
                            Siap siaga 24 jam untuk penanganan darurat di mana pun Anda
                            berada.
                        </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </ScrollFadeIn>
  );
};
