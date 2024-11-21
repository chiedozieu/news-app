import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import User from "../models/user.js";
import { fileRemover } from "../utils/fileRemover.js";

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
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("User not found");
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password < 6) {
      throw new Error("Password must be at least 6 characters");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    const { password, ...userWithoutPassword } = updatedUser.toObject();

    return res.status(200).json({
      updatedUser: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");
    upload(req, res, async function (err) {
      if (err) {
        const error = new Error("An unknown error occurred while uploading ");
        next(err);
      } else {
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;

          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar = req.file.filename;
          await updatedUser.save();

          const { password, ...userWithoutPassword } = updatedUser.toObject();
          res.status(200).json({
            updatedUser: userWithoutPassword,
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);

          const { password, ...userWithoutPassword } = updatedUser.toObject();

          res.status(200).json({
            updatedUser: userWithoutPassword,
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
