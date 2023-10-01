const express = require("express");
const router = express.Router();

const rateLimiter = require("express-rate-limit");
// const apiLimiter = rateLimiter({
//   windowMs: 15 * 60 * 1000,
//   max: 10,
//   message: {
//     msg: "Too many requests from this IP address, Please try again in 15min",
//   },
// });

const { register, login, updateUser } = require("../controllers/auth");
const authorization = require("../middleware/authentication");
const testUser = require("../middleware/test-user");

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", authorization, testUser, updateUser);

module.exports = router;
