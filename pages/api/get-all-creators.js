import { getAllContentCreatorsAndFindWhetherAnyoneIsFavourite } from "services/firebase";

const handler = async (req, res) => {
  const creators = await getAllContentCreatorsAndFindWhetherAnyoneIsFavourite();
  // if (true) {
  //   res.status(404).json({ error: "Doesn't have any users" });
  // }
  res.status(200).json(creators);
};

export default handler;
