const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");

exports.register = asyncHandler(async (req, res, next) => {
  console.log("req", req.body);
  const { email, password } = req.body;

  //check if user exist
  let user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({
      success: false,
      message: "This email already exists. Please login",
    });
  }

  const cryptPass = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, cryptPass);

  user = await User.create({
    email,
    password: hashedPassword,
  });

  res.status(200, "The user has been registred").json({
    success: true,
    message: "User registred",
  });
});
