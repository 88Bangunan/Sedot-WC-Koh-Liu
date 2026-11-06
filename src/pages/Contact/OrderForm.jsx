import { generateTextTemplate } from "../../utils/generateTextTemplate";
import { useContext, useState } from "react";
import { MdMail, MdWhatsapp } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

export const OrderForm = () => {
  const [order, setOrder] = useState({
    fullName: "",
    whatsappNumber: "",
    address: "",
    services: "",
    visitDate: "",
    description: "",
  });

  const {theme} = useContext(ThemeContext)

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (order.fullName.trim().length <= 0) {
      newErrors.fullName = "Nama lengkap wajib diisi";
    } else if (order.fullName.trim().length < 3) {
      newErrors.fullName = "Panjang dari huruf nama lengkap minimal 3 karakter";
    }

    if (order.whatsappNumber.trim().length <= 0) {
      newErrors.whatsappNumber = "Nomor telepon whatsapp wajib diisi";
    }

    if (order.address.trim().length <= 0) {
      newErrors.address = "Alamat wajib diisi";
    }

    if (order.services.trim().length <= 0) {
      newErrors.services = "Layanan wajib dipilih";
    }

    if (order.visitDate.trim().length <= 0) {
      newErrors.visitDate = "Jadwal kunjungan wajib diisi";
    }

    return newErrors;
  };

  let emailContent = {};

  const handleEmailSubmit = () => {
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length <= 0) {
      const subject = `Pemesanan layanan ${order.services}`;
      const encodedSubject = encodeURIComponent(subject);

      emailContent.subject = encodedSubject;

      const formatVisitDate = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "full",
      });

      const visitDateFix = new Date(order.visitDate);

      const textTemplate = `Hallo KohLiu, saya ingin memesan layanan ${order.services}:\n\nNama: ${order.fullName}\nNo.Whatsapp: ${order.whatsappNumber}\nAlamat lokasi: ${order.address}\nJenis Layanan: ${order.services}\nJadwal Kunjungan: ${formatVisitDate.format(visitDateFix)}\nKeterangan: ${order.description}`;
      const body = generateTextTemplate(textTemplate);

      emailContent.body = body;

      window.open(`mailto:steven.liu@binus.ac.id?subject=${emailContent.subject}&body=${emailContent.body}`, `_blank`)
    }
  };

  const handleOrderForm = (e) => {
    e.preventDefault();

    const errors = validate();

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formatVisitDate = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "full",
      });

      const visitDateFix = new Date(order.visitDate);

      const textTemplate = `Hallo KohLiu, saya ingin memesan layanan ${order.services}:\n\nNama: ${order.fullName}\nNo.Whatsapp: ${order.whatsappNumber}\nAlamat lokasi: ${order.address}\nJenis Layanan: ${order.services}\nJadwal Kunjungan: ${formatVisitDate.format(visitDateFix)}\nKeterangan: ${order.description}`;
      const encodedText = generateTextTemplate(textTemplate);

      window.open(`https://wa.me/6282117058812?text=${encodedText}`);
    }
  };

  return (
    <div className="order-form-container lg:w-2/3">
      <div className={`order-form-outer p-5 lg:p-10 box-border border ${theme === 'dark' ? 'bg-gray-500/30 border-gray-100/50' : 'border-gray-300'} shadow-xl rounded-lg`}>
        <div className="order-form-top">
          <h3 className="capitalize text-2xl font-bold">Form Pemesanan</h3>
          <hr className="w-1/6 border-2 rounded-lg border-primary mt-3" />
        </div>
        <div className="order-form-content my-8">
          <form onSubmit={handleOrderForm} className="flex flex-col gap-y-5">
            <div className="fullName-container field flex flex-col gap-y-4">
              <label htmlFor="fullName" className="uppercase cursor-pointer">
                NAMA LENGKAP
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={order.fullName}
                placeholder="Masukkan nama lengkap"
                className="block border-b border-gray-300 py-2 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                onChange={(e) =>
                  setOrder({ ...order, fullName: e.target.value })
                }
              />
              {errors.fullName && order.fullName.length <= 0 && (
                <p className="text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div className="whatsappNumber-container field flex flex-col gap-y-4">
              <label
                htmlFor="whatsappNumber"
                className="uppercase cursor-pointer"
              >
                NO. WHATSAPP
              </label>
              <input
                type="text"
                id="whatsappNumber"
                name="whatsappNumber"
                className="block border-b border-gray-300 py-2 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                placeholder="08xXXXXXXXXX"
                onChange={(e) =>
                  setOrder({ ...order, whatsappNumber: e.target.value })
                }
              />
              {errors.whatsappNumber && order.whatsappNumber.length <= 0 && (
                <p className="text-red-500">{errors.whatsappNumber}</p>
              )}
            </div>
            <div className="address-container field flex flex-col gap-y-4">
              <label htmlFor="address" className="uppercase cursor-pointer">
                ALAMAT LOKASI
              </label>
              <textarea
                name="address"
                id="address"
                placeholder="Masukkan alamat lengkap lokasi"
                rows={4}
                className="block border-b border-gray-300 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                onChange={(e) =>
                  setOrder({ ...order, address: e.target.value })
                }
              ></textarea>
              {errors.address && order.address.length <= 0 && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </div>
            <div className="services-container field flex flex-col gap-y-4">
              <label htmlFor="services" className="uppercase cursor-pointer">
                JENIS LAYANAN
              </label>
              <select
                name="services"
                id="services"
                className="block border-b border-gray-300 py-2 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                onChange={(e) =>
                  setOrder({ ...order, services: e.target.value })
                }
              >
                <option value="pilih-layanan">Pilih Layanan</option>
                <option value="Sedot WC">Sedot WC</option>
                <option value="Sedot Septic Tank">Sedot Septic Tank</option>
                <option value="Sedot Wastafel">Sedot Wastafel</option>
                <option value="Saluran Mampet">Saluran Mampet</option>
                <option value="Layanan Khusus">Layanan Khusus</option>
              </select>
              {errors.services && order.services.length <= 0 && (
                <p className="text-red-500">{errors.services}</p>
              )}
            </div>
            <div className="date-container field flex flex-col gap-y-4">
              <label htmlFor="date" className="uppercase cursor-pointer">
                JADWAL KUNJUNGAN
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="block border-b border-gray-300 py-2 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                onChange={(e) =>
                  setOrder({ ...order, visitDate: e.target.value })
                }
              />
              {errors.visitDate && order.visitDate.length <= 0 && (
                <p className="text-red-500">{errors.visitDate}</p>
              )}
            </div>
            <div className="description-container field flex flex-col gap-y-4">
              <label htmlFor="description" className="uppercase cursor-pointer">
                KETERANGAN
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Jelaskan kebutuhan atau kendala yang dialami..."
                rows={5}
                className="block border-b border-gray-300 py-2 w-full transition duration-500 ease-in-out focus:border-b-2 focus:outline-none focus:border-primary"
                onChange={(e) =>
                  setOrder({ ...order, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="whatsapp-btn field flex items-center gap-x-2">
              <button
                type="submit"
                className="flex items-center gap-x-2 bg-primary text-white font-semibold py-2 box-border rounded-lg px-5 hover:shadow-xl transition duration-500 ease-in-out cursor-pointer"
              >
                <MdWhatsapp />
                Kirim via Whatsapp
              </button>

              <button
                type="button"
                className="flex items-center gap-x-2 border border-primary hover:bg-primary hover:text-white font-semibold py-2 box-border rounded-lg px-5 hover:shadow-xl transition duration-500 ease-in-out cursor-pointer"
                onClick={handleEmailSubmit}
              >
                <MdMail />
                Kirim via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
