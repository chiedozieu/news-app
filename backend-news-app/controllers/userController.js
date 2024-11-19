import User from "../models/user.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
    throw new Error("User already exists");
    }

    user = await User.create({ name, email, password });

    const token = user.generateJWT();

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      avatar: user.avatar,
      verified: user.verified,
      token,
    });

    
  } catch (error) {
    next(error);
  }
};
