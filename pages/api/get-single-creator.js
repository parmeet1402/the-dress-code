import { getSingleCreatorInformation } from "services/firebase";

const handler = async (req, res) => {
  console.log({ req: req.cookies });
  if (req.cookies["access_token"] === "''") {
    return res.status(403).send({ error: { message: "User not logged in!!" } });
  }

  try {
    const creatorData = await getSingleCreatorInformation(req.query.creatorId);
    // if id not found send 404 error, creator not found
    res.status(200).json(creatorData);
  } catch (err) {
    console.log({ err });
    // 500 error: Something went wrong!
  }
};

export default handler;
