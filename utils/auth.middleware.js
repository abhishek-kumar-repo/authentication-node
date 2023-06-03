const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Store the decoded token in the request object
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = {
  authenticateUser,
};
