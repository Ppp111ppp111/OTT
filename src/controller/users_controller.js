const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

async function create_user(req, res, next) {
  try {
    const { email, password, name, role = "user" } = req.body;
    const existingUser = await Users.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await Users.create({
      email,
      password: hashedPassword,
      name,
      role,
      status: "active",
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    );

    // Omit password from response
    const { password: _, ...userData } = user.toJSON();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userData,
      token,
    });
  } catch (error) {
    console.error("Error in create_user:", error);
    next(error);
  }
}

async function login_user(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check if account is active
    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message: "Your account is not active. Please contact support.",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    );

    // Omit password from response
    const { password: _, ...userData } = user.toJSON();

    res.json({
      success: true,
      message: "Login successful",
      data: userData,
      token,
    });
  } catch (error) {
    console.error("Error in login_user:", error);
    next(error);
  }
}

module.exports = {
  login_user,
  create_user,
};
