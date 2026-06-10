import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import register from "../assets/register.jpg";
import api from "../api";
import Logo from "../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // NEW: empty-field errors
  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const nameRegex = /^[A-Za-z\s]{3,50}$/;
  // Complex email regex that specifically checks for starting dot, consecutive dots, etc
  const emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{11}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const addressRegex = /^[A-Za-z0-9\s,.'-]{10,}$/;

  const validateField = (name, value, allData = formData) => {
    let error = "";
    if (!value || value.trim() === "") {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      switch (name) {
        case "name":
          if (!nameRegex.test(value)) error = "Name must be 3-50 letters long.";
          break;
        case "email":
          if (value.startsWith(".")) {
             error = "Email cannot start with a dot (.)";
          } else if (!emailRegex.test(value)) {
             error = "Please enter a valid email address (e.g., mail@domain.com)";
          }
          break;
        case "phone":
          if (!phoneRegex.test(value)) error = "Phone number must be exactly 11 digits";
          break;
        case "address":
          if (!addressRegex.test(value)) error = "Address must be at least 10 characters long";
          break;
        case "password":
          if (!passwordRegex.test(value)) error = "Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
          break;
        case "confirmPassword":
          if (value !== allData.password) error = "Passwords do not match";
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
    if (touched[name] || value !== "") {
       const error = validateField(name, value, newData);
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
    const fields = ["name", "email", "phone", "address", "password", "confirmPassword"];
    
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
      "w-full px-4 py-3 border rounded-full outline-none transition-all placeholder:text-white/70 text-white";

    if (!touched[fieldName] && !formData[fieldName]) {
      return `${baseStyle} bg-white/10 border-white/70 focus:ring-2 focus:ring-white/30 focus:border-white`;
    }

    if (errors[fieldName]) {
      return `${baseStyle} bg-red-500/10 border-red-400 focus:ring-2 focus:ring-red-300/30 focus:border-red-400 text-white`;
    }

    return `${baseStyle} bg-white/10 border-white focus:ring-2 focus:ring-white/30 focus:border-white text-white`;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateAll()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        ...formData,
        name: formData.name?.trim(),
        email: formData.email?.trim(),
        phone: formData.phone?.trim(),
        address: formData.address?.trim(),
      });

      toast.success("Registered successfully");
      setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black font-sans">
      {/* FULL BACKGROUND IMAGE */}
      <img
        src={register}
        alt="Modern Architecture"
        className="absolute inset-0 w-screen h-screen object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* SCROLLABLE FORM LAYER */}
      <div className="relative z-10 h-screen w-full overflow-y-auto px-4 sm:px-6">
        <div className="min-h-full flex items-start justify-center py-6">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl px-5 sm:px-7 py-6">
            <div className="text-center mb-5">
              <Link to="/" className="inline-flex items-center justify-center gap-3">
                <img src={Logo} alt="LuxuryStay" className="h-11 w-auto" />
                <span className="text-2xl font-serif font-bold tracking-wide text-white">
                  LuxuryStay
                </span>
              </Link>
            </div>

            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputStyle("name")}
                />
                {errors.name && (
                  <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputStyle("email")}
                  />
                  {errors.email && (
                    <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputStyle("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputStyle("address")}
                />
                {errors.address && (
                  <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-white mb-1">
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
                    <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputStyle("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-300 text-xs font-semibold mt-1 transition-all">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-[#cbb19d] rounded cursor-pointer"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-white font-bold underline underline-offset-4 hover:text-[#cbb19d]"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-white font-bold underline underline-offset-4 hover:text-[#cbb19d]"
                  >
                    privacy policy
                  </Link>
                  .
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#cbb19d] text-white py-2 rounded-full font-semibold text-lg hover:bg-[#b89f8a] transition-all active:scale-[0.98] shadow-lg shadow-black/20 disabled:opacity-60"
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <p className="text-center text-sm text-white pt-2">
                Already have an account?
                <Link
                  to="/login"
                  className="font-bold underline underline-offset-4 hover:text-[#cbb19d] ml-1 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;