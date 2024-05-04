import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full flex justify-start items-start gap-10  px-20 py-12  mt-8 h-full max-sm:flex-col max-sm:px-8 ">
      <Image
        src="/assets/looper-pattern.svg"
        alt="hero"
        width={1100}
        height={500}
        className="-z-10 absolute top-[300px] right-0 dark:text-purple-700 hidden dark:block"
      />
      <div className="w-1/2 flex flex-col items-start gap-4 max-sm:w-full">
        <h1 className="text-[60px] font-bold text-blue-700 leading-[80px] max-sm:text-[40px] max-sm:leading-[60px] ">
          {" "}
          Explore best potiential
          <span className="text-purple-700"> clients and constructor</span>{" "}
        </h1>
        <p className="text-[18px] text-slate-500 t">
          Understanding Client Needs and Preferences
        </p>
        <Link href="/get-started">
          <CustomButton
            text="Get Started"
            className="bg-purple-900 text-white rounded-3xl px-7 py-3 hover:bg-purple-700 "
          />
        </Link>
      </div>
      <span className="relative flex h-20 w-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 ">
          <Image
            src="/assets/images/hammer.png"
            alt="main"
            fill
            className="dark:text-purple-700"
          />
        </span>
      </span>
      <Image
        src="/assets/images/building.png"
        alt="main"
        width={400}
        height={200}
        className="animate-bounce"
      />
    </section>
  );
};
