import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../assets/login.jpg";
import api from "../api";
import Logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ NEW: field errors for empty inputs
  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  // Complex email regex that specifically checks for starting dot, consecutive dots, etc
  const emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateField = (name, value) => {
    let error = "";
    if (!value || value.trim() === "") {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      switch (name) {
        case "email":
          if (value.startsWith(".")) {
             error = "Email cannot start with a dot (.)";
          } else if (!emailRegex.test(value)) {
             error = "Please enter a valid email address (e.g., mail@domain.com)";
          }
          break;
        case "password":
          if (!passwordRegex.test(value)) error = "Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
          break;
        default:
          break;
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    
    // Live validation
    if (touched[name] || value !== "") {
       const error = validateField(name, value);
       setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    const fields = ["email", "password"];
    
    // Mark all as touched
    const newTouched = {};
    fields.forEach(f => newTouched[f] = true);
    setTouched(newTouched);

    fields.forEach(field => {
      const error = validateField(field, formData[field] || "");
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getInputStyle = (fieldName) => {
    const baseStyle =
      "w-full px-5 py-3.5 border rounded-full outline-none transition-all placeholder:text-white/70 text-white";

    if (!touched[fieldName] && !formData[fieldName]) {
      return `${baseStyle} bg-white/10 border-white/70 focus:ring-2 focus:ring-white/30 focus:border-white`;
    }

    if (errors[fieldName]) {
      return `${baseStyle} bg-red-500/10 border-red-400 focus:ring-2 focus:ring-red-300/30 focus:border-red-400 text-white`;
    }

    return `${baseStyle} bg-white/10 border-white focus:ring-2 focus:ring-white/30 focus:border-white text-white`;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login Successful");

      setTimeout(() => {
        const userRole = res.data.user?.role?.toLowerCase() || "";
        if (userRole === "guest") {
          navigate("/");
        } else {
          navigate("/dashboard");
        }
      }, 900);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black font-sans">
      {/* FULL BACKGROUND IMAGE */}
      <img
        src={login}
        alt="Modern House"
        className="absolute inset-0 w-screen h-screen object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CENTER FORM */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl px-6 sm:px-9 py-8 sm:py-10">
          <div className="text-center mb-7">
              <Link to="/" className="inline-flex items-center justify-center gap-3">
                <img src={Logo} alt="LuxuryStay" className="h-11 w-auto" />
                <span className="text-2xl font-serif font-bold tracking-wide text-white">
                  LuxuryStay
                </span>
              </Link>
          </div>

          <form noValidate onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="info@gmail.com"
                value={formData.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputStyle("email")}
              />
              {errors.email && (
                <p className="text-red-300 text-xs font-semibold mt-2 transition-all">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputStyle("password")}
              />
              {errors.password && (
                <p className="text-red-300 text-xs font-semibold mt-2 transition-all">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#cbb19d] rounded"
                />
                <span>Remember Me</span>
              </label>

              <Link
                to="/forgot-password"
                className="text-white font-semibold underline underline-offset-4 hover:text-[#cbb19d] transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#cbb19d] text-white py-2 rounded-full font-semibold text-lg hover:bg-[#b89f8a] transition-all shadow-lg shadow-black/20 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm text-white mt-5 pt-3">
              Don't have an account?
              <Link
                to="/register"
                className="font-bold underline underline-offset-4 hover:text-[#cbb19d] ml-1 transition-colors"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;