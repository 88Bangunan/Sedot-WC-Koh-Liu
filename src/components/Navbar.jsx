import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router";
import { RiArrowDropUpLine } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";

export const Navbar = ({
  responsiveNav,
  setResponsiveNav,
  serviceDropdown,
  setServiceDropdown,
  areaDropdown,
  setAreaDropdown,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="navbar-outer min-w-full bg-primary p-5 box-border fixed top-0 left-0 z-20 border-b border-gray-400 shadow-xl shadow-white">
      <div className="w-full md:w-16/17 m-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2 md:gap-x-5">
          <NavLink to="/">
            <img
              className="w-15 h-15 sm:w-20 sm:h-20 shrink-0 object-cover object-center rounded-full shadow-xl"
              src="/img/logo-wc-koh-liu.png"
              alt=""
            />
          </NavLink>
          <div>
            <h1 className="text-secondary font-bold text-xl">
              Sedot WC Koh Liu
            </h1>
            <span className="italic text-gray-50 font-semibold">
              Layanan Jujur, Bersih, dan Tanpa Bongkar !
            </span>
          </div>
        </div>
        <div className="">
          <nav>
            <span className="text-secondary font-bold text-xl md:hidden">
              <RxHamburgerMenu
                onClick={() => setResponsiveNav(!responsiveNav)}
              />
            </span>
            <ul className="hidden md:flex md:items-center gap-x-5 text-secondary">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Beranda
                </NavLink>
              </li>
              <li className="flex items-center gap-x-1">
                <NavLink
                  to="/service/sedot-WC"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Layanan
                </NavLink>
                {serviceDropdown ? (
                  <RiArrowDropUpLine
                    className="text-2xl cursor-pointer"
                    onClick={() => setServiceDropdown(!serviceDropdown)}
                  />
                ) : (
                  <RiArrowDropDownLine
                    className="text-2xl cursor-pointer"
                    onClick={() => setServiceDropdown(!serviceDropdown)}
                  />
                )}
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Tentang Kami
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Kontak
                </NavLink>
              </li>
              <li className="flex items-center gap-x-1">
                <NavLink
                  to="/area/sedot-wc-jakarta"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Area
                </NavLink>
                {areaDropdown ? (
                  <RiArrowDropUpLine
                    className="text-2xl cursor-pointer"
                    onClick={() => setAreaDropdown(!areaDropdown)}
                  />
                ) : (
                  <RiArrowDropDownLine
                    className="text-2xl cursor-pointer"
                    onClick={() => setAreaDropdown(!areaDropdown)}
                  />
                )}
              </li>
              <li className="flex items-center gap-x-1 cursor-pointer">
                {theme === "light" ? (
                  <BsFillBrightnessHighFill
                    className="text-xl"
                    onClick={handleTheme}
                  />
                ) : (
                  <MdBrightness2 className="text-xl" onClick={handleTheme} />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {responsiveNav && (
        <div className="navbar-expanded absolute bg-primary text-secondary z-10 left-0 right-0 py-5 box-border">
          <nav className="w-10/11 m-auto">
            <ul className="flex flex-col gap-y-2 animate-fadeInSlideDown">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive && "font-bold underline underline-offset-2"
                  }
                >
                  Beranda
                </NavLink>
              </li>
              <li>
                Layanan
                <ul className="py-5 px-8 box-border flex flex-col gap-y-2">
                  <li>
                    <NavLink
                      to="/service/sedot-WC"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/sedot-septic-tank"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot Septic Tank
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/sedot-wastafel"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot Wastafel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/jasa-WC-mampet"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Jasa WC Mampet
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive && "font-bold underline underline-offset-2"
                  }
                >
                  Tentang Kami
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive && "font-bold underline underline-offset-2"
                  }
                >
                  Kontak
                </NavLink>
              </li>
              <li>
                Area
                <ul className="py-5 px-8 box-border flex flex-col gap-y-2">
                  <li>
                    <NavLink
                      to="/area/sedot-WC-jakarta"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC Jakarta
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/area/sedot-WC-bogor"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC Bogor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/area/sedot-WC-depok"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC Depok
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/area/sedot-WC-tangerang"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC Tangerang
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/area/sedot-WC-bekasi"
                      className={({ isActive }) =>
                        isActive && "font-bold underline underline-offset-2"
                      }
                    >
                      Sedot WC Bekasi
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {serviceDropdown && (
        <div className="absolute right-1/5 bg-primary text-secondary z-20 animate-fadeInSlideDown">
          <div className="p-3 box-border">
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink
                  to="/service/sedot-WC"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/sedot-septic-tank"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot Septic Tank
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/sedot-wastafel"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot Wastafel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/jasa-WC-mampet"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Jasa WC Mampet
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      {areaDropdown && (
        <div className="absolute right-1/25 bg-primary text-secondary z-20 animate-fadeInSlideDown">
          <div className="p-3 box-border">
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink
                  to="/area/sedot-wc-jakarta"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC Jakarta
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/area/sedot-wc-bogor"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC Bogor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/area/sedot-wc-depok"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC Depok
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/area/sedot-wc-tangerang"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC Tangerang
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/area/sedot-wc-bekasi"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-2"
                      : "font-semibold"
                  }
                >
                  Sedot WC Bekasi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
