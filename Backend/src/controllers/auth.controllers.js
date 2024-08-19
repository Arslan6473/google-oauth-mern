import { oauth2Client } from "../utils/googleConfig.js";
import axios from "axios";
import { User } from "../models/user.model.js";
import { createJwt } from "../utils/createJwt.js";

const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { name, email, picture } = response.data;

    let user = await User.findOne({ email: email });
    if (!user) {
      user = await User.create({
        name,
        email,
        picture,
      });
    }
    const token = await createJwt(user._id);
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export { googleLogin };
