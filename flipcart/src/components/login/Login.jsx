import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function LoginPage({setlogin}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const Navigate=useNavigate();
       const formRef=useRef(null)


    const handleKeyDown=(e)=>{
      if(e.key==='Enter'){
        e.preventDefault();
        const inputs=Array.from(formRef.current.querySelectorAll('input'))
        const currentIndex=inputs.indexOf(e.target);
        if(currentIndex < inputs.length - 1 ){
          inputs[currentIndex + 1].focus();
        }else{
          formRef.current.requestSubmit();
        }
      }
    }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email format");
      return;
    }
    alert("Login successfull!");
    setlogin(true);
    const token="kdfjaldks;fjlkdjfdkjldsfjdaskgjh;glkjf";
    localStorage.setItem('token',token);
    localStorage.setItem('name',JSON.stringify(form.email)); 
    Navigate('/');

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900">
      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 
        </h2>

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {error && (
            <p className="text-red-300 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white/80 text-sm">
          Don’t have an account?{" "}
          <Link to={"#"} className="text-yellow-300 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

