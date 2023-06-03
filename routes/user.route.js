const {
  signup,
  signin,
  getAllUser,
  logout,
} = require("../controller/user.controller");
const { authenticateUser } = require("../utils/auth.middleware");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.get("/get-all-user", authenticateUser, getAllUser);

module.exports = router;
