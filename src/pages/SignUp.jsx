import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function CreateToken(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `https://nt-devconnector.onrender.com/api/users`,
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/signIn");
    } catch (err) {
      setError(
        err.response?.data?.msg || "Ro‘yxatdan o‘tishda xatolik yuz berdi."
      );
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
          Welcome, Sign up
        </h2>
        <p className="text-gray-500 text-center mb-4">
          It is our great pleasure to have you on board! ✅
        </p>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form className="w-full flex flex-col" onSubmit={CreateToken}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
          >
            Sign Up
          </button>
          <Link
            to="/signin"
            className="mt-4 text-blue-500 hover:underline text-center"
          >
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
