import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Developer() {
  const [developer, setDev] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      console.log("Token topilmadi!");
      return;
    }

    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setDev(res.data))
      .catch((error) => error.massagr);
  }, []);


  return (
    <>
      {developer ? (
        <section className="bg-purple-100 h-screen">
        <div className="w-[100%] max-w-4xl mx-auto p-4 mt-[55px]">
          <Link
            className="inline-block px-4 py-2 mt-[30px] mb-[15px] bg-white text-black shadow rounded-lg transition"
            to="/profile"
          >
            Back To Profiles
          </Link>
          <div className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden">
            <div className="bg-[#e0f7fa] text-gray-900 p-6 text-center">
              <img
                src={developer.user?.avatar}
                alt="Developer Avatar"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
              />
              <h2 className="text-xl font-semibold mt-2">
                {developer.user?.name}
              </h2>
              <p className="text-sm text-gray-700">{developer?.company}</p>
              <p className="text-sm text-gray-700">{developer?.location}</p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold border-b pb-2 text-gray-900">
                  Bio
                </h2>
                <p className="text-gray-800">{developer?.bio}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold border-b pb-2 text-gray-900">
                  Skill Set
                </h2>
                <p className="text-gray-800">{developer?.skills}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold border-b pb-2 text-gray-900">
                    Experience
                  </h2>
                  {Array.isArray(developer?.experience) ? (
                    developer.experience.map((exp, index) => (
                      <div key={index} className="mb-2">
                        <h3 className="font-medium text-gray-800">
                          {exp.title} at {exp.company}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {exp.location} ({exp.from} - {exp.to || "Present"})
                        </p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700">No experience listed.</p>
                  )}
                </div>

                <div>
                  <h2 className="text-lg font-semibold border-b pb-2 text-gray-900">
                    Education
                  </h2>
                  {Array.isArray(developer?.education) ? (
                    developer.education.map((edu, index) => (
                      <div key={index} className="mb-2">
                        <h3 className="font-medium text-gray-800">
                          {edu.title} at {edu.company}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {edu.location} ({edu.from} - {edu.to || "Present"})
                        </p>
                        <p className="text-gray-700">{edu.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700">No education listed.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-200 p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-900">
                Github Repos
              </h2>
            </div>
          </div>
        </div>
      </section>
      ) : (
        <div className="flex items-center justify-center flex-col gap-[20px] text-[#17a2b8] absolute top-[30%] left-[45%] max-[440px]:left-[40%]">
                <i className="fa-solid fa-spinner fa-spin text-[50px]"></i>
                <p>Loading...</p>
              </div>
      )}
    </>
  );
}
