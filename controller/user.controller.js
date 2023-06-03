const db = require("./../models");
const bcrypt = require("bcrypt");

const User = db.users;

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

module.exports = {
  signup,
};
