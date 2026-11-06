import { Link } from "react-router";
import { IoReturnUpBack } from "react-icons/io5";
import ScrollFadeIn from "../components/ScrollFadeIn";

function NotFoundpage() {

    return (
        <ScrollFadeIn>
            <div className="flex justify-center items-center h-140 lg:h-170">
                <div className="flex flex-col gap-y-3 items-center">
                    <h1 className="text-9xl font-bold text-primary text-shadow-2xs">404</h1>
                    <h3 className="text-2xl">Page not found</h3>
                    <Link to="/"> 
                        <button className="bg-primary text-white py-2 px-5 box-border rounded-lg font-semibold shadow-primary shadow-lg transition ease-in cursor-pointer hover:bg-green-500 hover:shadow-xl hover:shadow-green-500 flex items-center gap-x-1">
                        <IoReturnUpBack className="font-semibold"/>
                            Kembali ke halaman utama
                        </button>
                    </Link>
                </div>
            </div>
        </ScrollFadeIn>
    )
}

export default NotFoundpage;