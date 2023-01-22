const handler = async (req, res) => {
  if (req.method === "GET") {
    return res
      .setHeader(
        "set-cookie",
        `access_token=''; path=/; samesite=lax; httponly;`
      )
      .status(200)
      .json({ message: "LOGOUT!!!" });
  }
};

export default handler;
