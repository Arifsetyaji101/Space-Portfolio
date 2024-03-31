"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl text-white mb-4)">{item.title}</p>

            <div className="text-md text-white prose prose-invert ">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="300"
                  width="300"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "My Graduation at 1 Pakem High School, Yogyakarta (2018 - 2021)",
    description: (
      <>
        <p>
          Aku sekolah di SMA 1 Pakem, Yogyakarta yang bertempat di Jalan
          Kaliurang KM 17.5, Tegalsari, Pakembinangun, Sleman. Aku masuk di
          jurusan IPA. Aku lulus pada tahun 2021 ketika masa pandemi Covid-19.
        </p>
      </>
    ),
    badge: "High School",
    image: "/me-3.jpg",
  },
  {
    title: "at Troya Digital and Troya Academic Platform (2021 - August 2022)",
    description: (
      <>
        <p>
          Setelah lulus SMA aku magang di Perusahaan Troya Digital hingga
          akhirnya aku bisa kontrak kerja dan masuk di tim pengembangan Troya
          Academic Platform (TAP). TAP adalah platform e-perpustakaan yang
          menghubungkan antara guru atau admin perpus dengan siswa atau pembaca
          melalui website dan aplikasi. Aku fokus mengembangkan dan maintenance
          sistem dan tampilan website.
        </p>
      </>
    ),
    badge: "Internship & Work",
    image: "/me-2.jpg",
  },
  {
    title: "at Gadjah Mada University",
    description: (
      <>
        <p>
          Setelah resign dari tempat kerja aku memutuskan untuk melanjutkan
          pendidikan perguruan tinggi. Alhamdulillah aku keterima di UGM di
          jurusan Bahasa dan Sastra Indonesia angkatan tahun 2022. Meskipun
          menjadi mahasiswa aku masih tetap menjelajahi dunia teknologi hingga
          sekarang.
        </p>
      </>
    ),
    badge: "Student",
    image: "/me-4.jpg",
  },
];
