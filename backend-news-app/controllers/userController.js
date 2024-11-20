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

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid user");
    }
    const isPasswordMatch = await user.comparePassword(password);

    if (isPasswordMatch) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        avatar: user.avatar,
        verified: user.verified,
        token: user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        avatar: user.avatar,
        verified: user.verified,
      });
    }else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};
