import React, { useState } from "react";

export default function SignInModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email.trim() !== "" && password.trim() !== "") {
      alert(`Welcome, ${email}!`);
      onClose(); 
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-2xl w-[400px] p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Sign in</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={staySignedIn}
                onChange={() => setStaySignedIn(!staySignedIn)}
                className="accent-black"
              />
              Stay signed in
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign in
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <button
            type="button"
            className="flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
          >
            <img src="/google.png" alt="Google" className="h-5 w-5 mr-2" />
            Continue with Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
          >
            <img src="/facebook.png" alt="Facebook" className="h-5 w-5 mr-2" />
            Continue with Facebook
          </button>

          <button
            type="button"
            className="flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
          >
            <img src="/apple.png" alt="Apple" className="h-5 w-5 mr-2" />
            Continue with Apple
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By clicking Sign in, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
