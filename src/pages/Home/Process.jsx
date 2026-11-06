import ScrollFadeIn from "../../components/ScrollFadeIn";

export const Process = () => {
  return (
    <ScrollFadeIn>
      <div className="process-container p-5 box-border my-15 xl:my-30 xl:w-12/13 xl:mx-auto">
        <div className="process-top text-center text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
          <h1>Proses Mudah dan Cepat !</h1>
        </div>
        <div className="process-bottom flex">
          <img
            className="w-full shrink-0"
            src="/img/Proses-Sedot-WC.png"
            alt=""
          />
        </div>
      </div>
    </ScrollFadeIn>
  );
};
