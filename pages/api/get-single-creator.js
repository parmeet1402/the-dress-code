import { getSingleCreatorInformation } from "services/firebase";

const handler = async (req, res) => {
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
