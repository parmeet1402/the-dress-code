// import { NextResponse } from "next/server";
import { getIsUserAlreadyCreated, createUser } from "services/firebase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { setCookie } from "cookies-next";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Create User Object
    const user = {
      email: req.body.email.toLowerCase(),
      password: req.body.password,
      name: req.body.name,
      age: req.body.age,
    };
    console.log({ user });

    // Check if that user already exists on the database
    const isUserAlreadyCreated = await getIsUserAlreadyCreated(user.email);

    if (isUserAlreadyCreated) {
      //  If User found, then we will send back 400 error with message "Account already exists"
      res.status(400).json({ error: { message: "User already exists!" } });
    } else {
      // If User Not found then Hash the password and update the user object
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
          user.password = hash;

          // Save to backend
          createUser(user);

          const { password, ...userWithoutPassword } = user;

          // Create a JWT Token
          // Sign JWT Token with User Object
          const jwtToken = jwt.sign(
            userWithoutPassword,
            process.env.SECRET_JWT_KEY
          );
          return res
            .setHeader(
              "set-cookie",
              `access_token=${jwtToken}; path=/; samesite=lax; httponly;`
            )
            .status(200)
            .json({ message: "DONEEE!" });
        });
      });
    }
  }
};

export default handler;
