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

exports.login = asyncHandler(async (req, res, next) => {
  console.log("req", req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // Verify the password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  //create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token: token,
    user: user,
  });
};
