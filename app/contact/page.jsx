"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Informasi Kontak
                </h2>
                <div className="space-y-4">
                  {/* Alamat */}
                  <div className="flex items-start space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">Alamat</h3>
                      <p className="text-gray-600">
                        Jalan Tenun No. 123, Denpasar, Bali
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@tenunalus.id</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">Telepon</h3>
                      <p className="text-gray-600">+62 812 3456 7890</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Tempat Offline
                </h2>
                <p className="text-gray-600">Rabu & Sabtu: Uluwatu</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Rules
              </h2>
              <ul className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>
                  Untuk melakukan pemesanan produk eksklusif, silakan hubungi
                  kami melalui kontak yang tertera.
                </li>
                <li>
                  Pembayaran dilakukan maksimal 2x24 jam setelah konfirmasi.
                </li>
                <li>
                  Barang hanya bisa diambil di lokasi offline atau dikirim
                  sesuai kesepakatan.
                </li>
                <li>
                  Semua transaksi bersifat final dan tidak dapat dikembalikan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
