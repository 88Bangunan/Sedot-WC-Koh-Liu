import ScrollFadeIn from "../../components/ScrollFadeIn";
import { generateTextTemplate } from "../../utils/generateTextTemplate";

export const Contact = ({ service }) => {
  const textTemplate = `Halo saya mau tanya-tanya soal layanan sedot wc dari koh liu nih 😊`;
  const encodedText = generateTextTemplate(textTemplate);

  return (
    <ScrollFadeIn>
      <div className="contact-container p-5 box-border pb-30 xl:w-12/14 xl:mx-auto">
        <div className="contact-top text-center md:text-start">
          <h3 className="text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
            Kontak
          </h3>
        </div>

        <div className="contact-bottom flex flex-col md:flex-row md:gap-x-10 lg:gap-x-30">
          <img
            src="/img/worker-image.jpeg"
            alt=""
            className="w-full object-cover rounded-xl my-5 md:order-2 md:w-1/2 lg:w-2/4 lg:h-60 md:my-0"
          />
          <div className="contact-text flex flex-col gap-y-2 md:justify-between md:w-1/2 lg:w-2/4">
            <h3 className="text-[25px] font-semibold lg:text-[35px]">
              Masih Ragu ? Hubungi{" "}
              <span className="text-primary">
                Nomor Telepon <span className="capitalize">{service}</span>
              </span>{" "}
              Sekarang
            </h3>
            <p className="lg:text-lg">
              Konsultasikan masalah{" "}
              <span className="capitalize">{service}</span>, septic tank,
              wastafel, atau saluran mampet Anda langsung dengan tim ahli kami,
              gratis tanpa biaya apapun.
            </p>

            <a href={`https://wa.me/6282117058812?text=${encodedText}`} target="_blank">
                <button className="w-2/4 bg-primary text-white font-semibold p-2 box-border rounded-lg transition duration-500 ease-in cursor-pointer hover:shadow-xl">
                Nomor <span className="capitalize">{service}</span>
                </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
