import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Banner = () => {
  const { navigate } = useAppContext();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image className="max-w-56" src={assets.wallet_bg} alt="wallet" />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Jelajahi Pesona Tenunalus MAURA
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          Setiap karya adalah perpaduan seni, tradisi, dan kualitas. Temukan
          yang paling cocok untuk Anda.
        </p>
        <button
          onClick={() => navigate("/all-products")}
          className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white"
        >
          Lihat Semua Koleksi
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.wallet_bg}
        alt="wallet"
      />
      <Image className="md:hidden" src={assets.wallet_bg} alt="wallet" />
    </div>
  );
};

export default Banner;
