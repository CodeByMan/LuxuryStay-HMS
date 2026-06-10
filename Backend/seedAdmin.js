import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./Models/userModel.js";

await mongoose.connect(process.env.MONGODB_URL);

const email = "admin@hotel.com";
const password = "Admin@123";

const existing = await User.findOne({ email });

if (existing) {
  console.log("Admin already exists");
  console.log("Email:", email);
  console.log("Password:", password);
} else {
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name: "Muhammad Ali",
    email,
    password: hashedPassword,
    phone: "03001234567",
    address: "Karachi, Pakistan",
    department: "Administration",
    role: "admin",
    isActive: true,
  });

  console.log("Admin created successfully");
  console.log("Email:", email);
  console.log("Password:", password);
}

await mongoose.disconnect();