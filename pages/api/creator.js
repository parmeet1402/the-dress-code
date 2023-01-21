import { addNewCreator } from "services/firebase";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Get the data from req
    try {
      const newCreatorObj = {
        name: req.body.name,
        age: req.body.age,
      };
      // Pass the data into function which will add and let us know once added...
      addNewCreator(newCreatorObj);
      // TODO: If Process was success, send 200 and Added Successfully message
      res.status(201).json({ message: "Creator added successfully!" });
    } catch (error) {
      // TODO: IF Failed, send 500 error and Say something dskjkfljkldj
      res.status(501).json({ message: "Failed!" });
    }
  }
};

export default handler;
