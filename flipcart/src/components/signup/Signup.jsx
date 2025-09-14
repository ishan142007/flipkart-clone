import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const formRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const inputs = Array.from(formRef.current.querySelectorAll("input"));
			const currentIndex = inputs.indexOf(e.target);
			if (currentIndex < inputs.length - 1) {
				inputs[currentIndex + 1].focus();
			} else {
				formRef.current.requestSubmit();
			}
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.password) {
			setError("Please fill in all fields");
			return;
		}
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			setError("Invalid email format");
			return;
		}
		alert("Signup successful!");
		// You can add logic to save user data here
		navigate("/login");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900">
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="w-full max-w-md p-8 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl"
			>
				<h2 className="text-3xl font-bold text-center text-white mb-6">
					Create Account
				</h2>
				<form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
					<div>
						<label className="block text-white text-sm mb-2">Name</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onKeyDown={handleKeyDown}
							onChange={handleChange}
							placeholder="Your Name"
							className="w-full px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>
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
						Sign Up
					</button>
				</form>
				<p className="mt-6 text-center text-white/80 text-sm">
					Already have an account?{" "}
					<Link to="/login" className="text-yellow-300 hover:underline">
						Login
					</Link>
				</p>
			</motion.div>
		</div>
	);
}
