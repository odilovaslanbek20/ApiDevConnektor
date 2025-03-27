import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
       <section className="w-full max-w-3xl mx-auto p-6 mt-[100px] bg-white shadow-lg rounded-lg sm:p-8 md:p-10 lg:p-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#17a2b8] text-center">Dashboard</h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 text-gray-700 text-base sm:text-lg font-medium">
        <FaUser className="text-xl sm:text-2xl text-[#17a2b8]" />
        <span>Welcome,</span>
        <span className="font-semibold text-center sm:text-left">AslanbekOdilov1220</span>
      </div>
      
      <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
        You have not yet set up a profile, please add some info.
      </p>
      
      <div className="flex justify-center mt-6">
        <Link
          to="/dashboard/createProfile"
          className="px-4 sm:px-6 py-2 bg-[#17a2b8] text-white font-medium text-sm sm:text-lg rounded-lg shadow-md hover:bg-[#138496] transition duration-300"
        >
          Create Profile
        </Link>
      </div>
    </section>
    </>
  );
}
