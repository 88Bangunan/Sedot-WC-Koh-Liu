import { useContext } from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { ThemeContext } from "../../context/ThemeContext";

export const ContactMe = () => {
    const {theme} = useContext(ThemeContext)

    return (
      <ScrollFadeIn>
        <div className="contact-me-container pt-45 p-5 box-border py-5 sm:w-7/8 sm:mx-auto md:w-20/21 lg:w-8/9 xl:w-7/8">
          <div className="contact-me-top lg:w-2/4">
            <h3 className="capitalize text-2xl xl:text-5xl font-bold">
              Hubungi Kami
            </h3>
            <hr className="w-1/6 border-2 rounded-lg border-primary mt-3" />
            <p className={`mt-5 ${theme === 'dark' && 'text-white'} text-gray-500`}>
              Membutuhkan jasa sedot WC, Septic Tank, Wastafel, atau saluran
              mampet? Tim <span className="text-primary font-bold">KohLiu</span>{" "}
              siap melayani wilayah Jakarta, Bogor, Depok, Tangerang, hingga
              Bekasi dengan cepat, professional, dan bergaransi
            </p>
          </div>
        </div>
      </ScrollFadeIn>
    );
}