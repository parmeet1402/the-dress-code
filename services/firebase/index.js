// ALl functions in this file provide a way for React Component to connect with Firebase services

import { addCreatorDoc, getAllCreators, getCreatorById } from "./service";

export const getAllContentCreatorsAndFindWhetherAnyoneIsFavourite =
  async () => {
    const snapshot = await getAllCreators();
    const creators = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      creators.push({ ...data, id: doc.id });
    });
    return { creators };
  };

export const getSingleCreatorInformation = async id => {
  const snapshot = await getCreatorById(id);
  const data = snapshot.data();
  return { ...data, id };
};

export const addNewCreator = async obj => {
  // Validate if require....
  await addCreatorDoc(obj);
  return { status: "success" };
};
