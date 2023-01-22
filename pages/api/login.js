import { getIsUserAlreadyCreated, getUser } from "services/firebase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  // Check if that user doesn't exists on the database
  const isUserAlreadyCreated = await getIsUserAlreadyCreated(req.body.email);

  if (!isUserAlreadyCreated) {
    // If not, throw error User doesn't exist
    return res.status(404).json({ error: { message: "User not found!" } });
  }

  const user = await getUser(req.body.email);

  // Else, Compare using Bcrypt
  bcrypt.compare(req.body.password, user.password, (err, compareResponse) => {
    if (!compareResponse) {
      return res
        .status(401)
        .json({ error: { message: "Password Incorrect!" } });
    }

    const { password, ...userWithoutPassword } = user;

    // Create JWT Token
    const jwtToken = jwt.sign(userWithoutPassword, process.env.SECRET_JWT_KEY);
    // Set Cookie
    // Return SUccess REsponse!!
    return res
      .setHeader(
        "set-cookie",
        `access_token=${jwtToken}; path=/; samesite=lax; httponly;`
      )
      .status(200)
      .json({ message: "LOGGED IN!" });
  });
};

export default handler;
