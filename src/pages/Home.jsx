import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src="dev.jpeg"
          alt="Background"
        />
  
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
  
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center px-4">
          <h1 className="text-[64px] text-white max-[620px]:text-[40px] max-[450px]:text-[35px] max-[400px]:text-[30px]">Developer Connector</h1>
          <p className="text-[24px] text-white max-[620px]:text-[19px] max-[450px]:text-[17px] max-[400px]:text-[16px]">
            Create a developer profile/portfolio, share posts and get help from other developers
          </p>
          <div className="flex items-center gap-[10px] mt-[15px]">
          <Link to="/signUp" className="py-[6px] px-[20px] bg-blue-400 text-white rounded">Sign Up</Link>
          <Link to="/signIn" className="py-[6px] px-[20px] bg-[#fff] text-black rounded">Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
  
