import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex items-center justify-center h-screen max-[520px]:px-[20px] bg-gray-100">
      <div className="max-w-md p-6 max-[520px]:w-[100%] shadow-2xl bg-white rounded-3xl border border-gray-300">
        <div className="flex flex-col items-center p-6">
          <img
            className="w-[80%] rounded-lg shadow-md"
            src="/404-error.avif"
            alt="Xatolik"
          />
          <h1 className="mt-6 text-center text-2xl font-bold text-gray-800 max-[400px]:text-[18px]">
            Xatolik yuz berdi!
          </h1>
          <p className="mt-2 text-center text-gray-600 text-lg max-[400px]:text-[14px]">
            Kechirasiz, so‘ragan sahifa topilmadi. Iltimos, bosh sahifaga qayting yoki boshqa bo‘limni tanlang.
          </p>
          <Link
            to="/"
            className="mt-6 px-6 py-3 max-[400px]:text-[14px] max-[330px]:text-[12px] bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}
