import { useContext } from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { ThemeContext } from "../../context/ThemeContext";

export const WhyAbout = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <ScrollFadeIn>
            <div className="why-container p-5 box-border my-5 lg:my-15 xl:my-30 grid grid-cols-1 md:flex md:items-center md:gap-x-15 gap-y-5 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
                <div className="why-content-text text-start flex flex-col gap-y-8 md:w-1/2">
                <h3 className="capitalize text-primary text-xl font-bold md:text-2xl">
                    kenapa memilih KohLiu
                </h3>
                <div className={`${theme === 'dark' && 'text-white'} why-content-paragraph-text text-gray-500 flex flex-col gap-y-5 text-justify`}>
                    <p>
                    <span className="font-semibold">KohLiu</span> melayani kebutuhan
                    sanitasi secara menyeluruh - mulai dari Sedot WC rumah tangga,
                    Sedot Septic Tank, Sedot Wastafel, hingga Jasa WC Mampet khusus.
                    Setiap teknisi kami terlatih menangani proyek skala kecil maupun
                    industri, sehingga pengerjaan tetap rapi, efisien, dan sesuai
                    standar keselamatan kerja.
                    </p>
                    <p>
                    Kami menggunakan armada mobil tangki (truck tinja) yang terawat,
                    sehingga proses penyedotan berlangsung cepat, bersih, dan tanpa
                    ceceran. Seluruh proses penyedotan juga dilakukan sesuai prosedur
                    dan standard yang ada sehingga terjamin 100% berkualitas !
                    </p>
                    <p>
                    Dengan sistem pemesanan yang mudah, harga transparan, serta
                    layanan customer service yang responsif, KohLiu berkomitmen
                    menjadi mitra sanitasi terpercaya - untuk rumah, ruko, kos-kosan,
                    hingga fasilitas pabrik di sekitar Anda
                    </p>
                </div>
                </div>
                <div className="md:w-1/2">
                <img className="w-full" src="/img/logo-wc-koh-liu.png" alt="" />
                </div>
            </div>
        </ScrollFadeIn>
    );
}