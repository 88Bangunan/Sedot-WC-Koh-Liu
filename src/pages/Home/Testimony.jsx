import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { useEffect, useState } from "react";

export const Testimony = () => {
  const [testimonyLists, setTestimonyLists] = useState([
    {
      name: "Andrew",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
    {
      name: "Vegen",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
    {
      name: "Steven",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
    {
      name: "Justin",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
    {
      name: "Ricky",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
    {
      name: "Raynn",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores est laborum, aut incidunt quisquam nisi velit, vel officiis quas fuga ex, explicabo labore obcaecati? Excepturi quasi sunt aut? Nulla, deleniti!",
    },
  ]);

  const [testimonyPerSlides, setTestimonyPerSlides] = useState(1);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setTestimonyPerSlides(3);
      } else if (window.innerWidth >= 768) {
        setTestimonyPerSlides(2);
      } else {
        setTestimonyPerSlides(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function chunkArray(array, size) {
    let results = [];

    for (let i = 0; i < array.length; i += size) {
      results.push(array.slice(i, i + size));
    }

    return results;
  }

  const testimonySlides = chunkArray(testimonyLists, testimonyPerSlides);

  function handleSlidesLeft() {
    if (activeReviewIndex === 0) {
      setActiveReviewIndex(testimonySlides.length - 1);
    } else {
      setActiveReviewIndex((activeReviewIndex) => activeReviewIndex - 1);
    }
  }

  function handleSlidesRight() {
    if (activeReviewIndex === testimonySlides.length - 1) {
      setActiveReviewIndex(0);
    } else {
      setActiveReviewIndex((activeReviewIndex) => activeReviewIndex + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => {
        if (prev === testimonySlides.length - 1) {
          return (prev = 0);
        } else {
          return (prev += 1);
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonySlides.length]);

  return (
    <ScrollFadeIn>
      <div className="testimony-container p-5 box-border my-15 xl:my-30 xl:w-12/13 xl:mx-auto">
        <div className="testimony-top text-center">
          <h1 className="text-primary text-lg lg:text-2xl xl:text-3xl font-bold">
            Apa Kata Mereka
          </h1>
          <p>
            Beragam pelanggan telah mempercayakan layanan sedot WC kepada kami
          </p>
          <p>
            Berikut ulasan dan pengalaman nyata dari mereka yang telah merasakan
            layanan kami.
          </p>
        </div>
        <div className="testimony-bottom mt-5">
          {/* TODO: Testimony Banner */}
          <div className="flex items-center justify-between gap-x-2">
            <div>
              <FaArrowLeft
                onClick={handleSlidesLeft}
                className="cursor-pointer"
              />
            </div>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${activeReviewIndex * 100}%)`,
                }}
              >
                {testimonySlides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 grow grid grid-cols-1 gap-x-3 md:grid-cols-3"
                  >
                    {slide.map((testimony, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-lg py-5 px-8 box-border"
                      >
                        <h1 className="text-primary text-xl font-semibold">
                          {testimony.name}
                        </h1>
                        <p className="text-sm mt-3">"{testimony.text}"</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <FaArrowRight
                onClick={handleSlidesRight}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-1 mt-3 cursor-pointer">
            {testimonySlides.map((slide, index) => (
              <div
                key={index}
                className={
                  activeReviewIndex === index
                    ? "w-2 h-2 bg-black rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full"
                }
                onClick={() => setActiveReviewIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
