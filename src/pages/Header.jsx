import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [click, setClick] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleClick = () => {
    setClick(!click);
  };


useEffect(() => {
  const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 1000);

    return () => clearInterval(interval)
}, []);


  return (
    <header className="bg-[#343a40]/90 backdrop-blur-md backdrop-brightness-100 py-[11px] px-[32px] w-[100%] fixed top-0 z-50 border-b border-white">
      <div className="flex items-center justify-between">
        <Link className="flex items-center gap-[6px]" to="/">
          <FaCode className="text-[28px] font-bold text-white" />
          <p className="text-[24px] font-bold text-white max-[380px]:text-[20px]">
            DevConnector
          </p>
        </Link>

        <nav className="flex items-center gap-[30px]">
          <ul
            className={`list-none flex items-center gap-[30px] 
             max-[720px]:w-[50%] max-[720px]:pt-[60px] max-[720px]:h-screen 
             max-[720px]:bg-[#000000]/75 max-[720px]:fixed max-[720px]:top-0 
             max-[720px]:flex-col transition-all duration-800 ease-in-out
             ${click ? "max-[720px]:right-0" : "max-[720px]:right-[-100%]"}
             max-[720px]:backdrop-blur-lg max-[720px]:backdrop-opacity-90 max-[400px]:w-[90%]`}
          >
            <li onClick={handleClick} className="text-white">
              <Link to="/developer">Developer</Link>
            </li>

            {token ? (
              <>
                <li onClick={handleClick} className="text-white">
                  <Link to="/posts">Posts</Link>
                </li>

                <li onClick={handleClick} className="text-white flex items-center gap-[5px]">
                  <FaUser />
                  <Link  to="/dashboard">Dashboard</Link>
                </li>

                <li onClick={handleClick} className="text-white flex items-center gap-[5px]">
                  <FaSignOutAlt />
                  <Link
                    to="/signIn"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setToken(null);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-white">
                  <Link to="/signUp">Register</Link>
                </li>

                <li className="text-white">
                  <Link to="/signIn">Login</Link>
                </li>
              </>
            )}

            <FaXmark
              onClick={handleClick}
              className="hidden max-[720px]:block max-[720px]:absolute max-[720px]:top-[25px] max-[720px]:right-[25px] text-[23px] text-[#fff] cursor-pointer"
            />
          </ul>

          <FaBars
            onClick={handleClick}
            className="hidden text-[#fff] text-[20px] max-[720px]:block cursor-pointer max-[380px]:text-[18px]"
          />
        </nav>
      </div>
    </header>
  );
}
