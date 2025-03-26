import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

export default function PostsDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);

  return (
    <div className="mt-[100px] p-6">
      {post ? (
        <section className="w-[70%] m-auto max-[1024px]:w-[90%] max-[450px]:w-[100%]">
          <div
            onClick={() => window.history.back()}
            className="text-[18px] font-medium w-[180px] h-[45px] flex items-center justify-center cursor-pointer bg-white shadow-md mb-[15px] text-[#000000]"
          >
            Back To Psts
          </div>
          <div
            key={post?._id}
            className="flex items-center max-[875px]:flex-col max-[480px]:w-[100%] gap-[50px] mb-[30px] w-full bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-[150px] h-[150px] rounded-full border-4 border-white shadow"
                src={post?.avatar}
                alt="profile"
              />
              <h2 className="text-center mt-3 text-[18px] font-semibold w-[250px] text-gray-800">
                {post?.name}
              </h2>
            </div>

            <div className="flex-1 max-[875px]:flex max-[875px]:items-center max-[875px]:justify-center max-[875px]:flex-col">
              <p className="text-gray-700 text-lg font-medium">{post?.text}</p>
              <p className="text-gray-500 text-sm mt-1">
                📅 {new Date(post?.date).toLocaleDateString()}
              </p>

              <div className="flex items-center gap-3 mt-3 max-[380px]:flex-col">
                <div className="flex items-center gap-3">
                  <button className="w-[50px] h-[40px] cursor-pointer rounded-lg flex items-center justify-center text-[20px] bg-gray-200 hover:bg-gray-300 transition">
                    <FaRegThumbsUp className="text-gray-700" />
                  </button>
                  <button className="w-[50px] h-[40px] cursor-pointer rounded-lg flex items-center justify-center text-[20px] bg-gray-200 hover:bg-gray-300 transition">
                    <FaRegThumbsDown className="text-gray-700" />
                  </button>
                </div>
                <div className="w-[170px] h-[40px] bg-blue-500 flex items-center justify-center rounded-lg text-white text-[18px] font-medium shadow-md hover:bg-blue-600 transition">
                  counter
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] mb-[50px]">
            <p className="w-[100%] h-[45px] flex items-center pl-[20px] text-[1.17rem] font-semibold text-[#fff] bg-[#17a2b8] mt-[20px] mb-[16px]">
              Leave a Comment
            </p>
            <form className="flex flex-col w-[100%]">
              <textarea
                name=""
                id=""
                className="border rounded border-[#ccc] w-[100%] h-[150px] pl-[8px] pt-[8px] text-[23px] max-[380px]:text-[18px] max-[380px]:tracking-[2px] outline-none tracking-[4px]"
                placeholder="Comment the post"
              ></textarea>
              <br />
              <button className="w-[100px] h-[40px] max-[425px]:w-[100%] text-[18px] cursor-pointer mt-[5px] rounded bg-[#333] text-[#fff]">
                Submit
              </button>
            </form>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center flex-col gap-[20px] text-[#17a2b8] absolute top-[30%] left-[45%] max-[440px]:left-[40%]">
          <i className="fa-solid fa-spinner fa-spin text-[50px]"></i>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
