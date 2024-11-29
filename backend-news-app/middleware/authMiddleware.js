import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
      next(error);
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
    next(error);
  }
};

export const adminGuard = async (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error('Not authorized')
    error.statusCode = 401;
    next(error)
  }
};
