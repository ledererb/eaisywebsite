import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="w-full bg-white py-28 lg:py-36">
      <div className="w-full max-w-[820px] mx-auto px-6 lg:px-10 flex flex-col items-start gap-5">
        <p className="font-['Inter',sans-serif] font-semibold text-[80px] leading-none tracking-tight text-[#1CEEE0]">
          404
        </p>
        <h1 className="font-['Montserrat',sans-serif] font-medium text-3xl lg:text-4xl text-[#264350] tracking-tight">
          Az oldal nem található
        </h1>
        <p className="font-['Montserrat',sans-serif] font-light text-base lg:text-lg text-[#264350]/80 leading-relaxed">
          A keresett oldal nem létezik, vagy áthelyeztük.
        </p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center justify-center px-8 h-[50px] rounded-full bg-[#264350] text-white font-['Montserrat',sans-serif] font-medium text-sm tracking-wider hover:opacity-90 transition-opacity"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </section>
  );
}
