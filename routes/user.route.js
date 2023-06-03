const { signup, signin, getAllUser } = require("../controller/user.controller");
const { authenticateUser } = require("../utils/auth.middleware");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/get-all-user", authenticateUser, getAllUser);

module.exports = router;
