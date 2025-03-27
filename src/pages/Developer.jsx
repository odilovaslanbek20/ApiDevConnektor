import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

export default function Developer() {
  const [developer, setDev] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      console.log("Token topilmadi!");
      return;
    }

    axios
      .get(`https://nt-devconnector.onrender.com/api/profile`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setDev(res.data))
      .catch((error) => error.massagr);
  }, []);

  return (
    <>
      <section className="mt-[50px] flex flex-col items-center px-4 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-10">
        <div className="w-[95%] max-w-5xl flex flex-col">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-[#17a2b8]">Developers</h1>
            <div className="flex items-center justify-center gap-2 mt-2 max-[390px]:flex-col">
              <FaReact className="text-3xl text-blue-500" />
              <p className="text-lg text-gray-700">
                Browse and connect with developers
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6 max-[850px]:grid-cols-1">
            {developer ? (
              <>
                {developer.map((dev) => (
                  <div
                    key={dev.user?._id}
                    className="bg-white bg-opacity-90 rounded-xl border border-gray-300 shadow-lg p-6 flex flex-row items-center gap-6 hover:shadow-xl transition duration-300 max-[640px]:flex-col"
                  >
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                      src={dev.user?.avatar}
                      alt="img"
                    />

                    <div className="flex flex-col items-start text-left max-[640px]:items-center max-[640px]:text-center">
                      <h2 className="text-xl font-bold text-gray-800">
                        {dev.user?.name}
                      </h2>
                      <p className="text-gray-600 text-sm">{dev?.company}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {dev?.location}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2 justify-start max-[640px]:justify-center">
                        {dev.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/developer/${dev.user?._id}`}
                        className="mt-4 px-6 py-2 bg-[#17a2b8] text-white rounded-lg shadow hover:bg-[#138496] transition"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center flex-col gap-[20px] text-[#17a2b8] absolute top-[30%] left-[45%] max-[440px]:left-[40%]">
                <i className="fa-solid fa-spinner fa-spin text-[50px]"></i>
                <p>Loading...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
