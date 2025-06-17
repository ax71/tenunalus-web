"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang Tenunalus
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6 items-center mb-16">
            <div className="relative h-[300px] w-full">
              <Image
                src="/owner1.jpg"
                alt="Pemilik 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold text-gray-900">
                Nama Pemilik 1
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Deskripsi tentang pemilik pertama dan kontribusinya dalam
                mengembangkan Tenunalus. Ceritakan tentang visi dan misinya
                dalam melestarikan tenun tradisional Indonesia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-6 items-center mb-16">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold text-gray-900">
                Nama Pemilik 2
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Deskripsi tentang pemilik kedua dan perannya dalam memajukan
                Tenunalus. Bagikan pengalamannya dalam mengembangkan produk
                tenun berkualitas tinggi.
              </p>
            </div>
            <div className="relative h-[300px] w-full">
              <Image
                src="/owner2.jpg"
                alt="Pemilik 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Tentang Kami
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Mengembangkan desain modern dengan tetap mempertahankan nilai
              tradisional. Tenunalus hadir untuk menjembatani warisan budaya
              dengan tren masa kini melalui inovasi berkelanjutan.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
