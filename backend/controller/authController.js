import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json({success: true, message: "User registered succesfully",data: user});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

export const login = async (req, res) => {
    console.log(req.body)
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      console.log(user);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...rest } = user._doc;
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        return res
          .status(200)
          .json({ token, success: true, message: "Successfully logged in", data: { ...rest } });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };