import ScrollFadeIn from "../../components/ScrollFadeIn";

export const OrderWay = ({service}) => {
    return (
        <ScrollFadeIn>
            <div className="order-way-container p-5 box-border my-15 xl:w-12/13 xl:mx-auto">
                <div className="order-way-top flex flex-col items-center text-center gap-y-5">
                <h3 className="text-primary text-2xl font-bold">
                    Cara Pesan Tukang <span className="capitalize">{service}</span>
                </h3>
                <p>
                    Proses {service} kami cepat, tanpa bau menyengat, dan tanpa merusak
                    keramik atau lantai sekitar.
                </p>
                </div>

                <div className="order-way-bottom flex flex-col mt-8 md:flex-row md:items-center md:gap-x-10">
                    <div className="md:w-1/2">
                        <img
                        className="rounded-xl"
                        src="/img/customer-service-gambar.jpg"
                        alt=""
                        />
                    </div>
                    <div className="flex flex-col gap-y-8 mt-5 md:w-1/2">
                        <div className="flex items-start gap-x-5">
                        <div className="w-1/8 md:w-1/10 lg:w-1/12 xl:w-1/14 h-10 xl:h-11 flex justify-center items-center font-semibold box-border bg-primary rounded-full text-white">
                            1
                        </div>
                        <div className="flex flex-col gap-y-2 w-7/8 md:w-9/10 lg:w-11/12 xl:w-13/14">
                            <h3 className="text-primary font-bold text-xl">
                            Konsultasi Awal
                            </h3>
                            <p>
                            Pertama, ceritakan semua masalah {service} yang Anda alami
                            </p>
                        </div>
                        </div>
                        <div className="flex items-start gap-x-5">
                            <div className="w-1/8 md:w-1/10 lg:w-1/12 xl:w-1/14 h-10 xl:h-11 flex justify-center items-center font-semibold box-border bg-primary rounded-full text-white">
                                2
                            </div>
                            <div className="flex flex-col gap-y-2 w-7/8 md:w-9/10 lg:w-11/12 xl:w-13/14">
                                <h3 className="text-primary font-bold text-xl">
                                Konfirmasi Waktu dan Lokasi
                                </h3>
                                <p>
                                Setelah masalah diketahui, cukup kirimkan alamat dan waktu
                                yang anda inginkan, maka tim kami akan berangkat sesuai
                                jadwal.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-5">
                            <div className="w-1/8 md:w-1/10 lg:w-1/12 xl:w-1/14 h-10 xl:h-11 flex justify-center items-center font-semibold box-border bg-primary rounded-full text-white">
                                3
                            </div>
                            <div className="flex flex-col gap-y-2 w-7/8 md:w-9/10 lg:w-11/12 xl:w-13/14">
                                <h3 className="text-primary font-bold text-xl">
                                Proses Pengerjaan
                                </h3>
                                <p>
                                Selanjutnya, tim kami akan langsung melakukan pekerjaan dengan
                                rapi, bersih, dan cepat.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-5">
                            <div className="w-1/8 md:w-1/10 lg:w-1/12 xl:w-1/14 h-10 xl:h-11 flex justify-center items-center font-semibold box-border bg-primary rounded-full text-white">
                                4
                            </div>
                            <div className="flex flex-col gap-y-2 w-7/8 md:w-9/10 lg:w-11/12 xl:w-13/14">
                                <h3 className="text-primary font-bold text-xl">
                                Laporan Pekerjaan
                                </h3>
                                <p>
                                Terakhir, setelah pekerjaan selesai, tim kami akan memberikan
                                laporan terkait hasil pekerjaan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollFadeIn>
    );
}