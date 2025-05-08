import jwt from "jsonwebtoken";
import User from "../models/userModels.js"; // ✅ Don't forget this!

const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1d';

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET); // ✅ Use the constant you defined

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};

export default authorize;
