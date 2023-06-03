const db = require("./../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtAge = 1 * 60;

const User = db.users;

// Sign Up
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(409).json({ error: "User already exist" });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newuser = {
      email: email,
      password: encryptedPassword,
    };

    const user = await User.create(newuser);

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Sign In
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res.status(404).json({ error: "Email does not exist" });
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (!checkPassword) {
      return res.status(404).json({ error: "Password does not match" });
    }

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: jwtAge,
      }
    );
    const user = {
      id: existingUser.id,
      email: existingUser.email,
      password: existingUser.password,
      token: token,
    };
    res.cookie("token", token, { maxAge: jwtAge * 1000, httpOnly: true });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get All User

const getAllUser = async (req, res) => {
  try {
    const AllUser = await User.findAll();
    return res.status(200).json({ users: AllUser });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: "1" });
    return res.status(200).json({ message: "User Logout Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  signin,
  getAllUser,
  logout,
};
